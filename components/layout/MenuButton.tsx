'use client';

import styles from './MenuButton.module.css';

/**
 * Purpose: the two-bar mobile menu trigger that folds into a cross.
 * Props: `isOpen` — current menu state; `onToggle` — fired on click.
 * Used in: SiteHeader.
 * Reusable: no — specific to this header's menu. Kept separate from
 *   SiteHeader so its animation styles do not bloat that module.
 */
export function MenuButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${isOpen ? styles.open : ''}`}
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
}
