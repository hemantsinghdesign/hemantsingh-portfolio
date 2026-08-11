import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import { Section } from '@/components/ui/Section';
import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import type { BlockOfType } from '@/types/content';
import styles from './CaseMosaic.module.css';

/**
 * Purpose: composes three to six images into one block, so a group that says
 *   a single thing reads as a single thing.
 * Props: `block` — the `mosaic` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes — any project with a set of images that belong together.
 *
 * This exists because the alternative is worse, not because a grid is
 * inherently better: four reference sheets stacked as two `pair` blocks
 * implies two groupings the content does not have, and five photographs
 * stacked full-width make five separate arguments out of one shoot.
 *
 * `even` never crops — it is for artwork, where the edge of the sheet is part
 * of the subject. `feature` crops square and gives the first image a double
 * cell, which is for photography, where the crop is a composition. At five
 * images `feature` tiles a four-column grid exactly, with no orphan cell.
 */
export function CaseMosaic({
  block,
  glyph,
  dense = false,
}: {
  block: BlockOfType<'mosaic'>;
  glyph?: ChapterGlyph;
  /** Research pages show working, not statements: smaller cells, more of
   *  them per row, tighter gaps. */
  dense?: boolean;
}) {
  const isFeature = block.layout === 'feature';

  return (
    <Section variant={block.title ? (dense ? 'compact' : 'default') : 'flush'}>
      {block.title && (
        <SectionHead
          marker={block.marker ?? '·'}
          title={block.title}
          note={block.note} glyph={glyph}
        />
      )}

      {block.text && <p className={styles.text}>{block.text}</p>}

      <div
        className={[
          styles.grid,
          isFeature ? styles.feature : styles.even,
          dense ? styles.dense : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={
          {
            '--cols': Math.min(block.images.length, dense ? 6 : 4),
          } as React.CSSProperties
        }
      >
        {block.images.map((image, index) => (
          <figure className={styles.cell} key={image.src}>
            {/* The box, not the image, carries the cell's proportion — that is
                what puts every caption in the set on one line. */}
            <div className={styles.imageBox}>
              <Image
                className={styles.image}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                // The feature cell is roughly twice the width of the others.
                sizes={
                  isFeature && index === 0
                    ? '(max-width: 860px) 100vw, 55vw'
                    : '(max-width: 860px) 50vw, 27vw'
                }
                quality={IMAGE_QUALITY}
                placeholder={image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={image.blurDataURL}
              />
            </div>
            {block.captions?.[index] && (
              <figcaption className={`${styles.caption} caption mono`}>
                {block.captions[index]}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}
