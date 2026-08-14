import Image from 'next/image';
import styles from './SectionHead.module.css';

/** A project mark used in place of the section letter. Threaded from
 *  CaseBlocks so every section rule in a case study agrees — a page with
 *  glyphs on some rules and letters on others reads as a mistake. */
export interface ChapterGlyph {
  src: string;
  width: number;
  height: number;
}

/**
 * Purpose: the lettered rule that opens each section — "A · Selected work".
 * Props: `marker` (the letter), `title`, optional `note` shown right,
 *   and `level` to set the heading rank for correct document outline.
 * Used in: home, work, about, capabilities, case studies.
 * Reusable: yes — every section on the site opens with one.
 *
 * `level` exists so a section head nested under an <h1> can be an <h2> and
 * one nested deeper can be an <h3>, keeping the outline valid.
 */
export function SectionHead({
  marker,
  title,
  note,
  level = 2,
  glyph,
}: {
  marker: string;
  title: string;
  note?: string;
  level?: 2 | 3;
  /** Replaces the letter with a project mark, e.g. Tadka Trail's jharokha. */
  glyph?: ChapterGlyph;
}) {
  const Heading = level === 2 ? 'h2' : 'h3';

  return (
    <div className={styles.head}>
      {glyph ? (
        <Image
          className={styles.glyph}
          src={glyph.src}
          alt=""
          width={glyph.width}
          height={glyph.height}
          aria-hidden="true"
        />
      ) : (
        <span className={`${styles.marker} mono`}>{marker}</span>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {note && <span className={`${styles.note} mono`}>{note}</span>}
    </div>
  );
}
