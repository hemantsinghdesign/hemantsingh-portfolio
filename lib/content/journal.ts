import { journalPostSchema } from '@/lib/content/schema';
import type { JournalPost } from '@/types/content';

/**
 * Journal registry.
 *
 * Intentionally empty. The schema and the /journal listing exist so the first
 * post only requires a content file.
 *
 * Adding a post:
 *   1. create `content/journal/<slug>.ts`
 *   2. add one import + one entry to `sources` below
 *
 * A per-post page is the one thing still missing: there is no
 * /journal/[slug] route, so the slug and by-slug lookups a route would need
 * are not written yet. Add them with the route that uses them rather than
 * ahead of it — `getAllProjects`/`getProjectBySlug` next door are the shape
 * to copy.
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
