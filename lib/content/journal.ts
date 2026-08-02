import { journalPostSchema } from '@/lib/content/schema';
import type { JournalPost } from '@/types/content';

/**
 * Journal registry.
 *
 * Intentionally empty. The route, schema and listing all exist so the
 * first post only requires a content file — no engineering work.
 *
 * Adding a post:
 *   1. create `content/journal/<slug>.ts`
 *   2. add one import + one entry to `sources` below
 */
const sources: unknown[] = [];

const posts: JournalPost[] = sources
  .map((source, i) => {
    const parsed = journalPostSchema.safeParse(source);
    if (!parsed.success) {
      throw new Error(
        `Invalid journal content at index ${i}:\n${parsed.error.toString()}`,
      );
    }
    return parsed.data;
  })
  .filter((post) => post.published)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllJournalPosts(): JournalPost[] {
  return posts;
}

export function getJournalSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return posts.find((post) => post.slug === slug);
}
