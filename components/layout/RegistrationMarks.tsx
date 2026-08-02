import styles from './RegistrationMarks.module.css';

/**
 * Purpose: the four corner crop marks that frame the page like a print sheet.
 * Props: none.
 * Used in: SiteChrome.
 * Reusable: no — fixed to the viewport corners, one instance only.
 */
export function RegistrationMarks() {
  return (
    <>
      <div className={`${styles.mark} ${styles.topLeft}`} aria-hidden="true" />
      <div className={`${styles.mark} ${styles.topRight}`} aria-hidden="true" />
      <div className={`${styles.mark} ${styles.bottomLeft}`} aria-hidden="true" />
      <div className={`${styles.mark} ${styles.bottomRight}`} aria-hidden="true" />
    </>
  );
}
