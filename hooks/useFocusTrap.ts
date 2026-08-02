'use client';

import { useEffect, useRef } from 'react';

/**
 * Purpose: keeps keyboard focus inside an open overlay, restores it to the
 *   trigger on close, and closes on Escape.
 * Props: none — this is a hook.
 *   `isActive` enables the trap; `onEscape` fires on the Escape key.
 *   Returns a ref to attach to the container element.
 * Used in: MobileMenu.
 * Reusable: yes — any modal, drawer or dialog overlay.
 *
 * Required by WCAG 2.1: a keyboard user must not be able to tab to content
 * hidden behind an open overlay.
 */

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function useFocusTrap<T extends HTMLElement>(
  isActive: boolean,
  onEscape?: () => void,
) {
  const ref = useRef<T>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;
    const container = ref.current;
    if (!container) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const focusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null,
      );

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape?.();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [isActive, onEscape]);

  return ref;
}
