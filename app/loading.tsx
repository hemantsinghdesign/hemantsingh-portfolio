import styles from './loading.module.css';

/**
 * Shown while a route segment streams in. Every page is statically
 * prerendered, so this is normally invisible — it exists for slow
 * connections and for the moment after a hard navigation.
 *
 * The site chrome stays mounted around it, so this is only the body.
 */
export default function Loading() {
  return (
    <div className={styles.shell} role="status" aria-live="polite">
      <p className={`${styles.label} mono`}>Loading</p>
      <div className={styles.bar} aria-hidden="true" />
      <span className="visually-hidden">Loading page content</span>
    </div>
  );
}
