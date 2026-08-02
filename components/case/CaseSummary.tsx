import type { Project } from '@/types/content';
import styles from './CaseSummary.module.css';

/**
 * Purpose: the facts table and the problem / approach / outcome narrative
 *   that opens every case study.
 * Props: `project`.
 * Used in: /projects/[slug].
 * Reusable: yes — identical for every case study.
 *
 * The approach is an <ol> because the steps are sequential; the facts are a
 * <dl> because they are term/definition pairs. Both matter to screen readers.
 */
export function CaseSummary({ project }: { project: Project }) {
  const facts = [
    ['Client', project.meta.client],
    ['Role', project.meta.role],
    ['Timeframe', project.meta.timeframe],
    ['Scope', project.meta.scope],
    ['Made in', project.meta.tools],
  ] as const;

  return (
    <div className={styles.grid}>
      <dl className={styles.facts}>
        {facts.map(([key, value]) => (
          <div key={key}>
            <dt className={`${styles.factKey} mono`}>{key}</dt>
            <dd className={styles.factValue}>{value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.body}>
        <h2 className={styles.label}>The problem</h2>
        <p className={styles.paragraph}>{project.overview}</p>

        <h2 className={styles.label}>The approach</h2>
        <ol className={styles.steps}>
          {project.approach.map((step, i) => (
            <li key={step}>
              <span className={`${styles.stepIndex} mono`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className={styles.stepText}>{step}</p>
            </li>
          ))}
        </ol>

        <h2 className={styles.label}>The outcome</h2>
        <p className={styles.paragraph}>{project.outcome}</p>
      </div>
    </div>
  );
}
