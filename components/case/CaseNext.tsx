import { TransitionLink } from '@/components/ui/TransitionLink';
import type { Project } from '@/types/content';
import styles from './CaseNext.module.css';

/**
 * Purpose: the large link at the foot of a case study — to the next project,
 *   or to contact when this is the only one.
 * Props: `next` — the following project, or undefined.
 * Used in: /projects/[slug].
 * Reusable: yes.
 */
export function CaseNext({ next }: { next?: Project }) {
  if (!next) {
    return (
      <TransitionLink href="/contact" className={styles.next}>
        <span className={`${styles.key} mono`}>Next</span>
        <span className={styles.title}>Start a project</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </TransitionLink>
    );
  }

  return (
    <TransitionLink href={`/projects/${next.slug}`} className={styles.next}>
      <span className={`${styles.key} mono`}>Next case — {next.index}</span>
      <span className={styles.title}>{next.title}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </TransitionLink>
  );
}
