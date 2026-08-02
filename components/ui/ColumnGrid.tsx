import styles from './ColumnGrid.module.css';

/**
 * Purpose: the three- and four-up grid of small titled blocks used for
 *   process steps, capability summaries and engagement types.
 * Props: `items` — each with a `marker`, `title` and `body`; `columns`.
 * Used in: home, capabilities.
 * Reusable: yes — any short list of titled paragraphs.
 */
export function ColumnGrid({
  items,
  columns = 4,
}: {
  items: { marker: string; title: string; body: string }[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={`${styles.grid} ${columns === 4 ? styles.four : styles.three}`}
    >
      {items.map((item) => (
        <div className={styles.item} key={item.title}>
          <span className={`${styles.marker} mono`}>{item.marker}</span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.body}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
