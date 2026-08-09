'use client';

import Link from 'next/link';
import { useRouteTransition } from '@/components/layout/PageTransition';

/**
 * Purpose: an internal link that plays the poster wipe before navigating.
 * Props: same as next/link's `href`, `className`, `children`, plus anything
 *   an anchor accepts.
 * Used in: ProjectRows, FeatureProject and CaseNext — the links into and
 *   between case studies. The header, footer, mobile menu, Button and
 *   TextLink use a plain next/link on purpose: the wipe marks entering a
 *   piece of work, and firing it on every utility link would spend the
 *   effect. Swap one of those to this component if that changes.
 * Reusable: yes — for any internal route that should announce itself.
 *
 * It renders a real next/link anchor, so the href is in the HTML for
 * crawlers and every native affordance keeps working. Only a plain primary
 * click is intercepted; anything the browser handles specially is left
 * alone:
 *
 *   - modifier clicks (cmd/ctrl/shift/alt) — open in tab or window
 *   - middle click and any non-primary button
 *   - a right click that opens the context menu
 *   - `target` set to anything other than the current frame
 *
 * If the transition declines the navigation (reduced motion, same route),
 * the event is not prevented and next/link handles it normally.
 */

type Props = React.ComponentProps<typeof Link>;

export function TransitionLink({ href, onClick, ...rest }: Props) {
  const { navigate } = useRouteTransition();

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const isPlainClick =
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey &&
          !rest.target;

        if (!isPlainClick) return;
        if (typeof href !== 'string' || !href.startsWith('/')) return;

        if (navigate(href)) event.preventDefault();
      }}
      {...rest}
    />
  );
}
