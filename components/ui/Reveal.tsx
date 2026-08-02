'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Reveal.module.css';

/**
 * Purpose: wraps a section so it fades and rises the first time it enters
 *   the viewport.
 * Props: `children`; `as` to change the element (defaults to 'section');
 *   `className` merged onto the wrapper.
 * Used in: every page, around each content section.
 * Reusable: yes — this is the site's only scroll-entry animation.
 *
 * The element is rendered server-side and only the observer is client-side,
 * so content is present in the HTML for crawlers regardless of scroll state.
 */
export function Reveal({
  children,
  as: Tag = 'section',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'section' | 'div' | 'article' | 'li';
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag ref={ref as never} className={`${styles.reveal} ${className}`}>
      {children}
    </Tag>
  );
}
