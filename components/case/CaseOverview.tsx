import type { Project } from '@/types/content';
import styles from './CaseOverview.module.css';

/**
 * Purpose: a compact facts strip — Role, Duration, Deliverables, Project
 *   Type — so a recruiter can place the project before reading the story.
 * Props: `project`.
 * Used in: /projects/[slug], directly under CaseHero, for projects that
 *   define `hero`. Distinct from CaseSummary: this carries facts only, no
 *   problem/approach/outcome narrative — that narrative now lives in the
 *   case study's own sequence of blocks instead of a fixed opening grid.
 * Reusable: yes, same opt-in condition as CaseHero.
 */
export function CaseOverview({ project }: { project: Project }) {
  const facts = [
    ['Role', project.meta.role],
    ['Duration', project.meta.timeframe],
    ['Deliverables', project.meta.scope],
    ['Project type', project.meta.type ?? project.discipline],
  ] as const;

  return (
    <dl className={styles.grid}>
      {facts.map(([key, value]) => (
        <div className={styles.item} key={key}>
          <dt className={`${styles.key} mono`}>{key}</dt>
          <dd className={styles.value}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
