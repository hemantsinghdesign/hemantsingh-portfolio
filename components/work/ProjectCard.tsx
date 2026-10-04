import Image from 'next/image';
import { TransitionLink } from '@/components/ui/TransitionLink';
import { THUMBNAIL_QUALITY } from '@/lib/images';
import type { Project } from '@/types/content';
import styles from './ProjectCard.module.css';

/**
 * Purpose: one project, shown with its image, name, disciplines, a one-line
 *   description and an explicit link to the case study.
 * Props: `project`; `layout` — 'row' (the /work index, image beside text)
 *   or 'tile' (the home page, three across); `headingLevel` — so the card
 *   sits correctly under whatever heading precedes it; `priority` for an
 *   above-the-fold image.
 * Used in: /work and the home page.
 * Reusable: yes — any list of projects.
 *
 * Nothing here depends on hover. The previous /work index was text rows with
 * a thumbnail that only appeared under a mouse, so on a phone, with a
 * keyboard, or to anyone who did not think to hover, the work was invisible.
 * Every card now shows its image at rest. Hover and focus add a slight lift
 * to the arrow; neither reveals anything that was not already there.
 *
 * The whole card is one link, so it is one tab stop with one visible focus
 * ring, and a tap anywhere on it opens the case. The image's `focus` value,
 * when set in the content file, decides where the fixed frame crops it.
 */
export function ProjectCard({
  project,
  layout = 'row',
  headingLevel = 2,
  priority = false,
}: {
  project: Project;
  layout?: 'row' | 'tile';
  headingLevel?: 2 | 3;
  priority?: boolean;
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const { thumbnail } = project;

  return (
    <TransitionLink
      href={`/projects/${project.slug}`}
      className={`${styles.card} ${layout === 'tile' ? styles.tile : styles.row}`}
    >
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={thumbnail.src}
          alt={thumbnail.alt}
          fill
          sizes={
            layout === 'tile'
              ? '(max-width: 760px) 100vw, 33vw'
              : '(max-width: 760px) 100vw, 42vw'
          }
          quality={THUMBNAIL_QUALITY}
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          placeholder={thumbnail.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={thumbnail.blurDataURL}
          style={{ objectPosition: thumbnail.focus ?? '50% 50%' }}
        />
      </div>

      <div className={styles.text}>
        <span className={`${styles.index} mono`}>
          {project.index} · {project.year}
        </span>
        <Heading className={styles.title}>{project.title}</Heading>
        <p className={`${styles.discipline} mono`}>{project.discipline}</p>
        <p className={styles.summary}>{project.summary}</p>
        <span className={`${styles.go} mono`}>
          View case study <i aria-hidden="true">→</i>
        </span>
      </div>
    </TransitionLink>
  );
}
