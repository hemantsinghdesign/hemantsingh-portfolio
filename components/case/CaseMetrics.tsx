import type { Project } from '@/types/content';
import styles from './CaseMetrics.module.css';

/**
 * Purpose: the row of large figures that closes a case study.
 * Props: `metrics` — the project's metric list.
 * Used in: /projects/[slug].
 * Reusable: yes.
 *
 * The term precedes its definition, as a <dl> requires — a screen reader
 * pairs them by document order, so a <dd> written first is read against the
 * wrong term. The figure still sits above its label visually; that is done
 * with `order` in the stylesheet, where presentation belongs.
 */
export function CaseMetrics({
  metrics,
}: {
  // Metrics are optional on a project; the route decides whether to render
  // this section at all, so the component itself always has a list.
  metrics: NonNullable<Project['metrics']>;
}) {
  return (
    <dl className={styles.metrics}>
      {metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <dt className={`${styles.label} mono`}>{metric.label}</dt>
          <dd className={styles.value}>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
