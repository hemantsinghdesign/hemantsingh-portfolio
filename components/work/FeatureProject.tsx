import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import { TransitionLink } from '@/components/ui/TransitionLink';
import type { Project } from '@/types/content';
import styles from './FeatureProject.module.css';

/**
 * Purpose: the large single-project feature on the home page.
 * Props: `project`; `priority` to mark its image as the LCP candidate.
 * Used in: home.
 * Reusable: yes — any page that needs to lead with one project.
 *
 * `priority` sets fetchpriority=high and disables lazy loading, because this
 * image is almost always the Largest Contentful Paint element.
 */
export function FeatureProject({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <TransitionLink href={`/projects/${project.slug}`} className={styles.feature}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          priority={priority}
          sizes="(max-width: 820px) 100vw, 55vw"
          quality={IMAGE_QUALITY}
          placeholder={project.thumbnail.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={project.thumbnail.blurDataURL}
        />
      </div>

      <div className={styles.meta}>
        <span className={`${styles.index} mono`}>
          {project.index} · {project.year}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={`${styles.discipline} mono`}>{project.discipline}</p>
        <p className={styles.summary}>{project.summary}</p>
        <span className={`${styles.go} mono`}>
          Read the case <i aria-hidden="true">→</i>
        </span>
      </div>
    </TransitionLink>
  );
}
