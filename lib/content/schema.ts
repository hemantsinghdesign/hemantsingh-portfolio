import { z } from 'zod';

/**
 * Content schemas.
 *
 * Every piece of project content is parsed through these at module load,
 * which means a malformed content file fails `next build` rather than
 * rendering a silently empty section in production.
 *
 * These schemas are also the contract a future headless CMS must satisfy.
 * Swapping Sanity/Contentful in later means writing a mapper that returns
 * this shape — no component or route changes.
 */

/** An image in `public/`. Dimensions are required so next/image can reserve
 *  space and avoid layout shift. */
export const imageSchema = z.object({
  /** Root-relative path, e.g. `/projects/sora-matcha/hero-tin-bowl.jpg` */
  src: z.string().startsWith('/'),
  /** Describes the image content. Empty string marks it as decorative. */
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

/* ---- case study blocks -------------------------------------------------
   The block list is what makes each case study individually art-directed
   without any bespoke components. Adding a layout = adding one variant
   here plus one renderer branch.
   --------------------------------------------------------------------- */

const bleedBlock = z.object({
  type: z.literal('bleed'),
  image: imageSchema,
  caption: z.string().optional(),
});

const headingBlock = z.object({
  type: z.literal('heading'),
  /** Letter shown in the section rule, e.g. "A". */
  marker: z.string().min(1).max(3),
  title: z.string().min(1),
  note: z.string().optional(),
});

const noteBlock = z.object({
  type: z.literal('note'),
  text: z.string().min(1),
});

const fullBlock = z.object({
  type: z.literal('full'),
  image: imageSchema,
  caption: z.string().optional(),
});

const pairBlock = z.object({
  type: z.literal('pair'),
  images: z.tuple([imageSchema, imageSchema]),
  captions: z.tuple([z.string(), z.string()]).optional(),
});

const triptychBlock = z.object({
  type: z.literal('triptych'),
  images: z.tuple([imageSchema, imageSchema, imageSchema]),
  captions: z.tuple([z.string(), z.string(), z.string()]).optional(),
});

/** Full-bleed dark section with a horizontally scrolling row. */
const galleryBlock = z.object({
  type: z.literal('gallery'),
  title: z.string().min(1),
  note: z.string().optional(),
  text: z.string().optional(),
  images: z.array(imageSchema).min(2),
});

export const blockSchema = z.discriminatedUnion('type', [
  bleedBlock,
  headingBlock,
  noteBlock,
  fullBlock,
  pairBlock,
  triptychBlock,
  galleryBlock,
]);

/* ---- project ---------------------------------------------------------- */

export const projectSchema = z.object({
  /** URL segment: /projects/<slug> — lowercase, hyphenated. */
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase and hyphenated'),
  /** Two-digit index shown in the UI, e.g. "01". */
  index: z.string().regex(/^\d{2}$/),
  title: z.string().min(1),
  /** Short qualifier under the title, e.g. "Ceremonial matcha". */
  kicker: z.string().min(1),
  discipline: z.string().min(1),
  year: z.string().regex(/^\d{4}$/),
  /** One-sentence summary. Doubles as the meta description fallback. */
  summary: z.string().min(1),
  /** Card/preview image. Also the Open Graph image fallback. */
  thumbnail: imageSchema,
  meta: z.object({
    client: z.string().min(1),
    role: z.string().min(1),
    timeframe: z.string().min(1),
    scope: z.string().min(1),
    tools: z.string().min(1),
  }),
  overview: z.string().min(1),
  approach: z.array(z.string().min(1)).min(1),
  outcome: z.string().min(1),
  metrics: z
    .array(z.object({ label: z.string().min(1), value: z.string().min(1) }))
    .min(1),
  blocks: z.array(blockSchema),
  /** Optional per-project SEO overrides; sensible defaults are derived. */
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
    })
    .optional(),
  /** Unpublished projects are excluded from listings, sitemap and routes. */
  published: z.boolean().default(true),
});

/* ---- journal ---------------------------------------------------------- */

export const journalPostSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase and hyphenated'),
  title: z.string().min(1),
  /** ISO date, e.g. "2026-03-14". */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  summary: z.string().min(1),
  body: z.array(z.string().min(1)),
  published: z.boolean().default(true),
});
