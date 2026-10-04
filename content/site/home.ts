import type { ContentImage } from '@/types/content';

/**
 * Home page copy and the large work image.
 *
 * ------------------------------------------------------------------------
 * REPLACING THE HOME IMAGE
 * ------------------------------------------------------------------------
 * The image below is a stand-in: an existing SORA asset, chosen because the
 * pack, the mark and the wordmark are all legible at poster size. To swap in
 * the final image:
 *
 *   1. Export it as a JPEG, portrait 4:5, at least 1600 × 2000 px
 *      (2000 × 2500 is better on large retina screens). Keep it under ~800 KB.
 *      Keep the important detail inside the middle 80% of the frame — on
 *      phones and narrow windows the frame can crop a little from the sides.
 *   2. Put it in /public/home/ (create the folder), e.g. /public/home/hero.jpg
 *   3. Change `src`, `width` and `height` below to match the file, and
 *      rewrite `alt` to describe what is actually in it.
 *   4. If the important part is not in the centre, set `focus` — e.g.
 *      '50% 30%' keeps the upper third when the frame crops.
 *   5. Update `credit` (the line under the image) and `href` (where it links).
 *   6. Optional: run `npm run blur` to regenerate placeholders, then add the
 *      new image's `blurDataURL` here. Without one the frame shows a flat
 *      tone while loading, which is fine.
 *   7. Push to the preview branch and check the home page at phone, tablet
 *      and desktop widths before it goes to production.
 *
 * No component needs editing. Any aspect ratio works — the frame is 4:5 and
 * the image is cropped to fill it — but a 4:5 original is cropped least.
 * ------------------------------------------------------------------------
 */
export const homeImage: ContentImage & { credit: string; href: string } = {
  src: '/projects/sora-matcha/tin-cream.jpg',
  alt: 'Cream SORA matcha tin with a silver lid, carrying the sunrise-and-leaves mark, the SORA wordmark and the line "Ceremonial grade. Born from the morning ritual."',
  width: 889,
  height: 1101,
  focus: '50% 50%',
  blurDataURL:
    'data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQD/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADERITIUFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AFwh1rZfbApyPIlrDmvdwA2OjkdS5rPqEn//2Q==',
  credit: 'SORA, retail tin. Packaging concept',
  href: '/projects/sora-matcha',
};

/** Three short lines. Where each breaks is deliberate. */
export const homeHeadline = ['I design identities', 'and the packaging', 'that carries them.'];

/** Word in `homeHeadline` set in the signal colour. */
export const homeHeadlineAccent = 'packaging';

export const homeIntro =
  'I’m Hemant Singh, a graphic designer working across brand identity, packaging and art direction. The work below includes a matcha brand, a welcome experience for international students, and a food brand built on the regional cooking of Madhya Pradesh, where I’m from.';

export const ticker = [
  'Identity',
  'Packaging',
  'Art direction',
  'Illustration',
  'Print',
  'Guidelines',
  'Campaign',
];
