import Image from 'next/image';
import { IMAGE_QUALITY } from '@/lib/images';
import { CaseGallery } from '@/components/case/CaseGallery';
import { CaseTimeline } from '@/components/case/CaseTimeline';
import { CaseCompare } from '@/components/case/CaseCompare';
import { CaseInterlude } from '@/components/case/CaseInterlude';
import { CaseColumns } from '@/components/case/CaseColumns';
import { CaseVisualLanguage } from '@/components/case/CaseVisualLanguage';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import type { ContentBlock, ContentImage } from '@/types/content';
import styles from './CaseBlocks.module.css';

/**
 * Purpose: renders a case study's ordered block list into its layouts.
 * Props: `blocks` — the project's `blocks` array.
 * Used in: /projects/[slug].
 * Reusable: yes — every case study renders through this one component.
 *
 * Adding a layout means adding a variant to the schema and a branch here.
 * The switch is exhaustive over the discriminated union, so TypeScript fails
 * the build if a new block type is added without a renderer.
 */

function Figure({
  image,
  caption,
  wide = false,
  sizes,
}: {
  image: ContentImage;
  caption?: string;
  wide?: boolean;
  sizes: string;
}) {
  return (
    <figure className={`${styles.figure} ${wide ? styles.wide : ''}`}>
      <Image
        className={styles.image}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        quality={IMAGE_QUALITY}
        placeholder={image.blurDataURL ? 'blur' : 'empty'}
        blurDataURL={image.blurDataURL}
      />
      {caption && (
        <figcaption className={`${styles.caption} caption mono`}>{caption}</figcaption>
      )}
    </figure>
  );
}

export function CaseBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case 'heading':
            return (
              <Section key={key}>
                <SectionHead
                  marker={block.marker}
                  title={block.title}
                  note={block.note}
                />
              </Section>
            );

          case 'note':
            return (
              <Section key={key} variant="flush">
                <p className={styles.note}>{block.text}</p>
              </Section>
            );

          case 'prose':
            return (
              <Section key={key} variant="flush">
                <p
                  className={`${styles.prose} prose ${block.variant === 'reflection' ? styles.reflection : ''}`}
                >
                  {block.text}
                </p>
              </Section>
            );

          case 'bleed':
            return (
              <section className={styles.bleed} key={key}>
                <Image
                  className={styles.bleedImage}
                  src={block.image.src}
                  alt={block.image.alt}
                  width={block.image.width}
                  height={block.image.height}
                  priority={index === 0}
                  sizes="100vw"
                  quality={IMAGE_QUALITY}
                  placeholder={block.image.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={block.image.blurDataURL}
                />
                {block.caption && (
                  <p className={`${styles.bleedCaption} mono`}>{block.caption}</p>
                )}
              </section>
            );

          case 'full':
            return (
              <Section key={key} variant="flush">
                <Figure
                  image={block.image}
                  caption={block.caption}
                  wide
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
              </Section>
            );

          case 'pair':
            return (
              <Section key={key} variant="flush">
                <div className={styles.pair}>
                  {block.images.map((image, i) => (
                    <Figure
                      key={image.src}
                      image={image}
                      caption={block.captions?.[i]}
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  ))}
                </div>
              </Section>
            );

          case 'triptych':
            return (
              <Section key={key} variant="flush">
                <div className={styles.triptych}>
                  {block.images.map((image, i) => (
                    <Figure
                      key={image.src}
                      image={image}
                      caption={block.captions?.[i]}
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  ))}
                </div>
              </Section>
            );

          case 'gallery':
            return <CaseGallery key={key} block={block} />;

          case 'timeline':
            return <CaseTimeline key={key} block={block} />;

          case 'compare':
            return <CaseCompare key={key} block={block} />;

          case 'interlude':
            return <CaseInterlude key={key} block={block} />;

          case 'columns':
            return <CaseColumns key={key} block={block} />;

          case 'visualLanguage':
            return <CaseVisualLanguage key={key} block={block} />;
        }
      })}
    </>
  );
}
