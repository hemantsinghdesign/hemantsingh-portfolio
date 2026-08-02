'use client';

import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { labelForPath } from '@/lib/routes';

/**
 * Purpose: drives the poster-sheet wipe between routes and exposes a
 *   `navigate` function to TransitionLink.
 * Props: `children` — the whole app.
 * Used in: the root layout, wrapping SiteChrome.
 * Reusable: no — one per document.
 *
 * Design constraints this satisfies:
 *
 * - Navigation is never blocked. Links are real anchors; only a plain left
 *   click is intercepted, and only to sequence the cover half. Modifier
 *   clicks, middle clicks, back, forward and deep links all take the native
 *   path and get the reveal half only.
 * - Rapid navigation stays responsive. A click while a transition is running
 *   aborts the animation and routes immediately.
 * - Reduced motion disables interception entirely, so navigation is instant.
 * - Framer Motion lives in the overlay, loaded dynamically after hydration,
 *   so it is never part of the initial bundle.
 */

const COVER_MS = 460;

type Phase = 'idle' | 'covering' | 'revealing';

interface TransitionApi {
  /** Returns false if the caller should fall through to native navigation. */
  navigate: (href: string) => boolean;
}

const TransitionContext = createContext<TransitionApi>({ navigate: () => false });

export function useRouteTransition(): TransitionApi {
  return useContext(TransitionContext);
}

const Overlay = dynamic(
  () => import('./TransitionOverlay').then((m) => m.TransitionOverlay),
  { ssr: false },
);

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const reducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>('idle');
  const [label, setLabel] = useState('');

  // Derived during render rather than in an effect. React re-runs the render
  // immediately without committing, so the reveal is queued in the same pass
  // the new route arrives in — no extra frame, no cascading effect.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setLabel(labelForPath(pathname));
    setPhase(reducedMotion ? 'idle' : 'revealing');
  }

  const timer = useRef<number | null>(null);
  const pendingHref = useRef<string | null>(null);

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  /** Called by TransitionLink. Returns false to let the browser handle it. */
  const navigate = useCallback(
    (href: string) => {
      if (reducedMotion) return false;
      if (href === pathname) return false;

      // Already animating: abort and route now rather than queue a delay.
      if (phase !== 'idle') {
        clearTimer();
        setPhase('idle');
        router.push(href);
        return true;
      }

      setLabel(labelForPath(href));
      setPhase('covering');
      pendingHref.current = href;

      timer.current = window.setTimeout(() => {
        timer.current = null;
        const target = pendingHref.current;
        pendingHref.current = null;
        if (target) router.push(target);
      }, COVER_MS);

      return true;
    },
    [clearTimer, pathname, phase, reducedMotion, router],
  );

  useEffect(() => () => clearTimer(), [clearTimer]);

  const handleRevealed = useCallback(() => setPhase('idle'), []);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      {phase !== 'idle' && (
        <Overlay phase={phase} label={label} onRevealed={handleRevealed} />
      )}
    </TransitionContext.Provider>
  );
}
