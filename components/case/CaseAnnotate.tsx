'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import { IMAGE_QUALITY } from '@/lib/images';
import type { BlockOfType } from '@/types/content';
import styles from './CaseAnnotate.module.css';

/**
 * Purpose: holds one illustration in place while its reasoning scrolls past,
 *   revealing a hairline annotation for each detail as that detail is read.
 * Props: `block` — the `annotate` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes — any project whose central idea is a single drawing.
 *
 * The motion here is the only kind this case study allows: it reveals
 * information. A note appears when its paragraph is being read and not
 * before, so the drawing is explained in the order the writing explains it.
 * There are no hotspots, no hover targets and nothing to click — the reader
 * scrolls, and the drawing annotates itself.
 *
 * Below 860px the sticky layout collapses, the annotations have nothing to
 * point at, and every paragraph is simply legible. Same for reduced motion.
 */
export function CaseAnnotate({ block, glyph }: { block: BlockOfType<'annotate'> ; glyph?: ChapterGlyph }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The step closest to the middle of the viewport is the one being read.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index !== -1) setActive(index);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.block}>
      <SectionHead marker={block.marker} title={block.title} note={block.note} glyph={glyph} />

      <div className={styles.grid}>
        <figure className={styles.figure}>
          <div className={styles.stage}>
            <Image
              className={styles.image}
              src={block.image.src}
              alt={block.image.alt}
              width={block.image.width}
              height={block.image.height}
              sizes="(max-width: 860px) 100vw, 46vw"
              quality={IMAGE_QUALITY}
              placeholder={block.image.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={block.image.blurDataURL}
            />

            {block.notes.map((note, index) => (
              <span
                key={note.label}
                className={[
                  styles.note,
                  note.x > 50 ? styles.noteRight : styles.noteLeft,
                  index === active ? styles.noteActive : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${note.x}%`, top: `${note.y}%` }}
                aria-hidden="true"
              >
                <span className={styles.dot} />
                <span className={styles.rule} />
                <span className={`${styles.label} mono`}>{note.label}</span>
              </span>
            ))}
          </div>
        </figure>

        <ol className={styles.reading}>
          {block.notes.map((note, index) => (
            <li
              key={note.label}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`${styles.step} ${index === active ? styles.stepActive : ''}`}
            >
              <span className={`${styles.stepLabel} mono`}>{note.label}</span>
              <p className={styles.stepText}>{note.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
