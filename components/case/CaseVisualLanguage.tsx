import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import type { BlockOfType } from '@/types/content';
import styles from './CaseVisualLanguage.module.css';

/**
 * Purpose: the visual-language reference board — source image, colour
 *   palette, and motifs — revealed progressively as the section scrolls
 *   into view instead of shown flat all at once.
 * Props: `block` — the `visualLanguage` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes, one per case study by design.
 *
 * Motion is the same mechanism as everywhere else on the site: the
 * ancestor's `.is-visible` reveal class (from Reveal/useReveal) gates a
 * pure-CSS staggered fade-rise on each child, indexed via `--i`. No JS
 * animation library, no scroll-jacking — matches
 * docs/routing-and-motion.md.
 */
export function CaseVisualLanguage({ block, glyph }: { block: BlockOfType<'visualLanguage'> ; glyph?: ChapterGlyph }) {
  return (
    <Reveal as="section" className={styles.section}>
      <SectionHead marker={block.marker} title={block.title} note={block.note} glyph={glyph} />

      <div className={styles.layout}>
        <div className={styles.referenceWrap}>
          <Image
            className={styles.reference}
            src={block.reference.src}
            alt={block.reference.alt}
            width={block.reference.width}
            height={block.reference.height}
            sizes="(max-width: 900px) 100vw, 420px"
            quality={IMAGE_QUALITY}
            placeholder={block.reference.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={block.reference.blurDataURL}
          />
        </div>

        <div className={styles.detail}>
          <p className={styles.text}>{block.text}</p>

          <ul className={styles.palette}>
            {block.palette.map((swatch, i) => (
              <li
                className={styles.swatch}
                key={swatch.hex}
                style={{ '--i': i } as React.CSSProperties}
              >
                <span className={styles.chip} style={{ background: swatch.hex }} />
                <span className={`${styles.swatchLabel} mono`}>{swatch.label}</span>
                <span className={`${styles.swatchHex} mono`}>{swatch.hex}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.motifs}>
            {block.motifs.map((motif, i) => (
              <li
                className={styles.motif}
                key={motif.src}
                style={{ '--i': i + block.palette.length } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative
                    SVG motif with no fixed intrinsic size; next/image adds no value here. */}
                <img className={styles.motifIcon} src={motif.src} alt="" />
                <span className={`${styles.motifLabel} mono`}>{motif.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
