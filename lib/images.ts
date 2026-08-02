/**
 * Image optimisation settings.
 *
 * next/image defaults to quality 75, which re-compresses an already-lossy
 * source and is the single biggest cause of softness in a photography-led
 * case study. 95 is close to visually lossless for AVIF and WebP; the extra
 * bytes are worth it when the images are the argument.
 *
 * Allowed values are declared in `next.config.mjs` under `images.qualities`
 * — Next rejects any quality not in that list.
 */
export const IMAGE_QUALITY = 95;

/** Small previews do not need the same fidelity as full-bleed artwork. */
export const THUMBNAIL_QUALITY = 85;
