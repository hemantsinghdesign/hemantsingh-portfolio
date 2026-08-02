import type { Project } from '@/types/content';
import styles from './CaseMetrics.module.css';

/**
 * Purpose: the row of large figures that closes a case study.
 * Props: `metrics` — the project's metric list.
 * Used in: /projects/[slug].
 * Reusable: yes.
 */
export function CaseMetrics({ metrics }: { metrics: Project['metrics'] }) {
  return (
    <dl className={styles.metrics}>
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <dd className={styles.value}>{metric.value}</dd>
          <dt className={`${styles.label} mono`}>{metric.label}</dt>
        </div>
      ))}
    </dl>
  );
}
