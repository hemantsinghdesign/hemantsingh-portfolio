import type { Project } from '@/types/content';
import styles from './CaseHero.module.css';

/**
 * Purpose: the case study's opening statement — large display type, no
 *   image. The thing meant to land before a single word of the facts
 *   grid is read.
 * Props: `hero` — a project's optional `hero` field.
 * Used in: /projects/[slug], only when the project defines `hero`.
 * Reusable: yes, but opt-in per project (see the schema comment in
 *   lib/content/schema.ts) — a project that doesn't set `hero` renders
 *   the plain text-led opening exactly as before.
 *
 * Deliberately not an image: three separate attempts to represent this
 * project with a photograph or product shot all read as "an object," not
 * "an experience." The project's own opening line does the job a picture
 * couldn't — this component's only trick is committing to that fully:
 * huge type, nothing else on screen.
 */
export function CaseHero({ hero }: { hero: NonNullable<Project['hero']> }) {
  return (
    <section className={styles.frame}>
      {hero.lines.map((line, i) => (
        <p className={styles.line} key={line} style={{ '--line-index': i } as React.CSSProperties}>
          <span>{line}</span>
        </p>
      ))}
    </section>
  );
}
