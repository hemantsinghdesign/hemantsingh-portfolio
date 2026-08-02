'use client';

import Link from 'next/link';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { nav } from '@/lib/site';
import styles from './MobileMenu.module.css';

/**
 * Purpose: the full-screen navigation panel shown below 760px.
 * Props: `isOpen` — whether the panel is shown; `onClose` — called on Escape
 *   or after a link is followed.
 * Used in: SiteHeader.
 * Reusable: no — bound to the site's nav. The focus-trap hook it uses is.
 *
 * `visibility: hidden` while closed keeps the links out of the tab order,
 * and the focus trap keeps keyboard users inside the panel while it is open.
 */
export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const ref = useFocusTrap<HTMLDivElement>(isOpen, onClose);

  return (
    <div
      id="mobile-menu"
      ref={ref}
      className={`${styles.sheet} ${isOpen ? styles.open : ''}`}
      inert={!isOpen}
    >
      <nav aria-label="Mobile">
        {nav.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.link}
            style={{ '--link-index': index } as React.CSSProperties}
            onClick={onClose}
          >
            <span className={`${styles.index} mono`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
