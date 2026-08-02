'use client';

import { useState } from 'react';
import { TransitionLink } from '@/components/ui/TransitionLink';
import { ProjectPreview } from '@/components/work/ProjectPreview';
import type { ContentImage, Project } from '@/types/content';
import styles from './ProjectRows.module.css';

/**
 * Purpose: the index-style list of projects, with a thumbnail that follows
 *   the cursor on hover.
 * Props: `projects` — the list to render; `showPending` — appends a muted
 *   "In progress" row.
 * Used in: home, work.
 * Reusable: yes — any list of projects.
 *
 * Hover state is the only React state here, and it changes once per row
 * entered, not per mouse move.
 */
export function ProjectRows({
  projects,
  showPending = false,
}: {
  projects: Project[];
  showPending?: boolean;
}) {
  const [hovered, setHovered] = useState<ContentImage | null>(null);

  return (
    <>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug}>
            <TransitionLink
              href={`/projects/${project.slug}`}
              className={styles.row}
              onMouseEnter={() => setHovered(project.thumbnail)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(project.thumbnail)}
              onBlur={() => setHovered(null)}
            >
              <span className={`${styles.index} mono`}>{project.index}</span>
              <span className={styles.title}>{project.title}</span>
              <span className={`${styles.discipline} mono`}>
                {project.discipline}
              </span>
              <span className={`${styles.year} mono`}>{project.year}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </TransitionLink>
          </li>
        ))}

        {showPending && (
          <li className={styles.pending}>
            <div className={styles.row}>
              <span className={`${styles.index} mono`}>
                {String(projects.length + 1).padStart(2, '0')}
              </span>
              <span className={`${styles.title} ${styles.pendingTitle}`}>
                In progress
              </span>
              <span className={`${styles.discipline} mono`}>Being written up</span>
              <span className={`${styles.year} mono`}>2026</span>
              <span className={styles.arrow} aria-hidden="true" />
            </div>
          </li>
        )}
      </ul>

      <ProjectPreview image={hovered} isVisible={hovered !== null} />
    </>
  );
}
