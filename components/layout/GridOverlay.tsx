import styles from './GridOverlay.module.css';

/**
 * Purpose: draws the twelve-column hairline grid the whole site is set on.
 * Props: none.
 * Used in: SiteChrome (rendered once, behind every route).
 * Reusable: no — it is a single fixed backdrop, not a layout primitive.
 *
 * Server component: purely decorative markup with no interactivity.
 */
export function GridOverlay() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className={styles.column} />
      ))}
    </div>
  );
}
