'use client';

import { useSyncExternalStore } from 'react';

/**
 * Purpose: reports whether the visitor has asked for reduced motion, and
 *   updates live if they change the setting mid-session.
 * Props: none — this is a hook. Returns a boolean.
 * Used in: PageTransition.
 * Reusable: yes — anywhere a JS-driven animation needs to be skipped.
 *
 * useSyncExternalStore is the correct primitive for a browser subscription:
 * it avoids the setState-in-effect pattern entirely and is tear-free during
 * concurrent rendering.
 *
 * The server snapshot is `true`. Assuming reduced motion until proven
 * otherwise means the first paint never commits to an animation the visitor
 * did not ask for.
 */

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void): () => void {
  const query = window.matchMedia(QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return true;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
