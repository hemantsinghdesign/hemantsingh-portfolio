import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import type { BlockOfType } from '@/types/content';
import styles from './CaseStory.module.css';

/**
 * Purpose: gives one story card a full band of its own — its ground colour,
 *   its pulled line, and both language settings side by side.
 * Props: `block` — a `story` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes, for any project whose artefacts are meant to be read.
 *
 * The Hindi is not secondary and is never collapsed behind a toggle. It sits
 * at the same size as the English with more leading, because Devanagari
 * matras need the room. Hiding it would remove the point of the artefact.
 */

const TONE = {
  green: styles.green,
  maroon: styles.maroon,
  brown: styles.brown,
} as const;

export function CaseStory({ block }: { block: BlockOfType<'story'> }) {
  return (
    <section className={`${styles.block} ${TONE[block.tone]}`}>
      <p className={styles.pull}>{block.pull}</p>

      <div className={styles.grid}>
        <Image
          className={styles.image}
          src={block.image.src}
          alt={block.image.alt}
          width={block.image.width}
          height={block.image.height}
          sizes="(max-width: 820px) 100vw, 46vw"
          quality={IMAGE_QUALITY}
          placeholder={block.image.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={block.image.blurDataURL}
        />

        <div className={styles.text}>
          <div className={`${styles.meta} mono`}>
            <span>{block.dish}</span>
            <span>{block.region}</span>
          </div>
          <div>
            <span className={`${styles.lang} mono`}>English</span>
            <p className={styles.english}>{block.english}</p>
          </div>
          <div>
            <span className={`${styles.lang} mono`}>हिन्दी</span>
            <p className={styles.hindi} lang="hi">
              {block.hindi}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
