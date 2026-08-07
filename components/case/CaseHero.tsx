import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
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
 * Two forms, and which one a project uses is a content decision:
 *
 * - `lines` — for HSBC, where three attempts at a photographic hero all read
 *   as "an object" rather than "an experience," so the opening line does the
 *   job a picture could not.
 * - `image` — for Tadka Trail, where the drawing is the concept. It sits
 *   contained on the site's own paper with nothing in front of it, because
 *   any words there would explain a thing that explains itself.
 *
 * The only trick either form has is committing fully: one element on screen.
 */
export function CaseHero({ hero }: { hero: NonNullable<Project['hero']> }) {
  if (hero.image) {
    return (
      <section className={styles.plate}>
        <Image
          className={styles.drawing}
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority
          sizes="(max-width: 700px) 78vw, 40vw"
          quality={IMAGE_QUALITY}
          placeholder={hero.image.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={hero.image.blurDataURL}
        />
      </section>
    );
  }

  return (
    <section className={styles.frame}>
      {(hero.lines ?? []).map((line, i) => (
        <p className={styles.line} key={line} style={{ '--line-index': i } as React.CSSProperties}>
          <span>{line}</span>
        </p>
      ))}
    </section>
  );
}
