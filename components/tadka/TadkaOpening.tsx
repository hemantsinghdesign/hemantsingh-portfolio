'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { MandalaSeal } from '@/components/tadka/MandalaSeal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { IMAGE_QUALITY } from '@/lib/images';
import type { ContentImage } from '@/types/content';
import styles from './TadkaOpening.module.css';

/**
 * Purpose: opens the Tadka Trail case study the way the product opens — a
 *   sealed package with the mandala printed on it, pulled away by the
 *   visitor's scroll to uncover the hero that was underneath all along.
 * Props: `hero` — the approved jharokha illustration, rendered unchanged.
 * Used in: the project route, for this slug only.
 * Reusable: no. It is one product's mechanism.
 *
 * Architecture:
 *
 *   .track   220vh of scroll, the distance that drives the peel
 *     .stage sticky, one viewport tall
 *       .hero  the approved illustration — the destination
 *       .seal  the unopened surface, clipped back as progress rises
 *       .strip the peel strip, sitting on the seal's leading edge
 *
 * The hero is rendered once. It is not duplicated, not recoloured and not
 * rescaled beyond what responsive sizing requires — the peel only uncovers
 * what is already there.
 *
 * Progress is written to a CSS custom property inside a requestAnimationFrame,
 * so scrolling costs no React renders. Clipping and translation are the only
 * animated properties, both compositor-friendly.
 *
 * The track is a fixed height, so the visitor is never held: scrolling past
 * it continues the document normally, and scrolling back re-seals it.
 *
 * Under prefers-reduced-motion the track collapses, the seal and strip are
 * not rendered, and the hero is simply present — the case study is fully
 * usable without any of this.
 */
export function TadkaOpening({ hero }: { hero: ContentImage }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const isStatic = useReducedMotion();

  useEffect(() => {
    if (isStatic) return;
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      frame.current = null;
      const rect = track.getBoundingClientRect();
      // Distance scrolled into the track, over the part of it that can scroll.
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable));
      track.style.setProperty('--peel', progress.toFixed(4));
    };

    const onScroll = () => {
      frame.current ??= window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [isStatic]);

  return (
    <div ref={trackRef} className={styles.track}>
      <div className={styles.stage}>
        {/* Everything happens inside a panel the shape of the drawing, not
            across the whole viewport. A full-bleed wash uncovers empty paper
            for the first half of the scroll, which reads as a loading screen;
            a panel uncovers the drawing from the first pixel, and looks like
            an object being opened. */}
        <div className={styles.panel}>
          <Image
            className={styles.drawing}
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            priority
            sizes="(max-width: 700px) 78vw, 42vh"
            quality={IMAGE_QUALITY}
            placeholder={hero.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={hero.blurDataURL}
          />

          <div className={styles.seal} aria-hidden="true">
            <div className={styles.sealMark}>
              <MandalaSeal />
            </div>
          </div>

          <div className={styles.stripTrack} aria-hidden="true">
            <div className={styles.strip} />
          </div>
        </div>

        <p className={`${styles.hint} mono`} aria-hidden="true">
          Scroll to open
        </p>
      </div>
    </div>
  );
}
