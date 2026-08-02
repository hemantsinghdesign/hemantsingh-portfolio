'use client';

import { useEffect, useRef } from 'react';

/**
 * Purpose: adds a class to an element the first time it scrolls into view, so
 *   sections can fade and rise on entry.
 * Props: none — this is a hook. Returns a ref to attach to the target element.
 * Used in: Reveal.
 * Reusable: yes — any element that should animate on entry can use it.
 *
 * Each element gets its own observer entry and unobserves itself once seen,
 * so nothing keeps running after the reveal has happened. Under
 * prefers-reduced-motion the class is applied immediately and no observer is
 * created at all.
 */

const VISIBLE_CLASS = 'is-visible';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add(VISIBLE_CLASS);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
