import styles from './Ticker.module.css';

/**
 * Purpose: the scrolling band of disciplines beneath the hero.
 * Props: `items` — the words to cycle through.
 * Used in: home page.
 * Reusable: yes, though currently only used once.
 *
 * The list is rendered twice so translating the row by exactly -50% loops
 * seamlessly. Decorative, so hidden from assistive tech — the same words
 * appear as real text on /capabilities.
 */
export function Ticker({ items }: { items: readonly string[] }) {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.row}>
        {[0, 1].map((copy) => (
          <span key={copy}>
            {items.map((item) => (
              <span key={item}>
                {item}
                <i className={styles.diamond}>◆</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
