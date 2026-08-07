import { projectSchema } from '@/lib/content/schema';
import type { Project } from '@/types/content';
import { soraMatcha } from '@/content/projects/sora-matcha';
import { tadkaTrail } from '@/content/projects/tadka-trail';
import { hsbcOnboarding } from '@/content/projects/hsbc-onboarding';

/**
 * Project registry.
 *
 * Adding a project:
 *   1. create `content/projects/<slug>.ts`
 *   2. drop images in `public/projects/<slug>/`
 *   3. add one import + one entry to `sources` below
 *
 * The registry is explicit rather than glob-based on purpose: the
 * dependency graph stays readable, and a missing project is a build
 * error instead of a silent omission.
 */
const sources = [soraMatcha, hsbcOnboarding, tadkaTrail];

/** Parsed once at module load. Invalid content fails `next build`. */
const projects: Project[] = sources
  .map((source, i) => {
    const parsed = projectSchema.safeParse(source);
    if (!parsed.success) {
      throw new Error(
        `Invalid project content at index ${i}:\n${parsed.error.toString()}`,
      );
    }
    return parsed.data;
  })
  .filter((project) => project.published)
  .sort((a, b) => a.index.localeCompare(b.index));

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Wraps around, so the last project links back to the first. */
export function getNextProject(slug: string): Project | undefined {
  if (projects.length < 2) return undefined;
  const i = projects.findIndex((project) => project.slug === slug);
  if (i === -1) return undefined;
  return projects[(i + 1) % projects.length];
}
