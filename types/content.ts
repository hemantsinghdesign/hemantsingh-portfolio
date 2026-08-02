import type { z } from 'zod';
import type {
  blockSchema,
  imageSchema,
  journalPostSchema,
  projectSchema,
} from '@/lib/content/schema';

/**
 * Types are inferred from the schemas rather than declared separately, so
 * validation and typing can never drift apart. Import types from here;
 * import the schemas only where you actually parse.
 */

export type ContentImage = z.infer<typeof imageSchema>;
export type ContentBlock = z.infer<typeof blockSchema>;
export type Project = z.infer<typeof projectSchema>;
export type JournalPost = z.infer<typeof journalPostSchema>;

/** Narrow a block to one variant, e.g. `Extract<ContentBlock, { type: 'pair' }>`. */
export type BlockOfType<T extends ContentBlock['type']> = Extract<
  ContentBlock,
  { type: T }
>;

/** Input shape before defaults are applied (e.g. `published`). */
export type ProjectInput = z.input<typeof projectSchema>;
export type JournalPostInput = z.input<typeof journalPostSchema>;
