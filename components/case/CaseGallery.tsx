import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import type { BlockOfType } from '@/types/content';
import styles from './CaseGallery.module.css';

/**
 * Purpose: the dark full-bleed band with a horizontally scrolling row of
 *   posters — used to set a campaign apart from the rest of a case study.
 * Props: `block` — the `gallery` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes — any project can include a gallery block.
 *
 * The scroller carries `tabIndex={0}` and a group role so keyboard users can
 * reach it and scroll with arrow keys. Without it a horizontally scrolling
 * region is unreachable without a mouse.
 */
export function CaseGallery({ block }: { block: BlockOfType<'gallery'> }) {
  return (
    <section
      className={[
        styles.band,
        block.tone === 'green' ? styles.toneGreen : '',
        block.tone === 'maroon' ? styles.toneMaroon : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.head}>
        {block.note && <span className={`${styles.marker} mono`}>{block.note}</span>}
        <h2 className={styles.title}>{block.title}</h2>
        {block.text && <p className={styles.text}>{block.text}</p>}
      </div>

      <div
        className={styles.scroller}
        tabIndex={0}
        role="group"
        aria-label={`${block.title}, scrollable gallery`}
      >
        {block.images.map((image) => (
          <div className={styles.item} key={image.src}>
            <Image
              className={styles.image}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 700px) 70vw, 380px"
              quality={IMAGE_QUALITY}
              placeholder={image.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={image.blurDataURL}
            />
          </div>
        ))}
      </div>

      <p className={`${styles.hint} mono`}>Scroll sideways →</p>
    </section>
  );
}
