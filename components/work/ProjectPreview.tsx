'use client';

import Image from 'next/image';
import type { ContentImage } from '@/types/content';
import styles from './ProjectPreview.module.css';

/**
 * Purpose: the thumbnail that trails the cursor while a work row is hovered.
 * Props: `image` — the project thumbnail; `isVisible` — whether a row is
 *   currently hovered.
 * Used in: ProjectRows.
 * Reusable: no — tied to the work list interaction.
 *
 * Positioning reads the shared `--pointer-x` / `--pointer-y` custom
 * properties, so following the cursor costs zero JavaScript here. Only the
 * on/off state is React, and that changes once per hover.
 */
export function ProjectPreview({
  image,
  isVisible,
}: {
  image: ContentImage | null;
  isVisible: boolean;
}) {
  if (!image) return null;

  return (
    <div
      className={`${styles.preview} ${isVisible ? styles.visible : ''}`}
      aria-hidden="true"
    >
      <Image
        className={styles.image}
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        sizes="230px"
      />
    </div>
  );
}
