import { describe, expect, it } from 'vitest';
import {
  getAllProjects,
  getNextProject,
  getProjectBySlug,
  getProjectSlugs,
} from '@/lib/content/projects';
import { getAllJournalPosts } from '@/lib/content/journal';

/**
 * Content contract tests. These guard the invariants that routing, the
 * sitemap and structured data all depend on.
 */
describe('project content', () => {
  const projects = getAllProjects();

  it('validates and exposes at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('has unique slugs', () => {
    const slugs = getProjectSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('resolves a project by slug and returns undefined for unknown ones', () => {
    expect(getProjectBySlug('sora-matcha')?.title).toBe('SORA');
    expect(getProjectBySlug('does-not-exist')).toBeUndefined();
  });

  it('gives every image an explicit size and a root-relative src', () => {
    for (const project of projects) {
      const images = [
        project.thumbnail,
        ...project.blocks.flatMap((block) => {
          if ('image' in block) return [block.image];
          if ('images' in block) return block.images;
          return [];
        }),
      ];
      expect(images.length).toBeGreaterThan(0);
      for (const image of images) {
        expect(image.src.startsWith('/')).toBe(true);
        expect(image.width).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
      }
    }
  });

  it('gives every non-decorative image alt text', () => {
    for (const project of projects) {
      expect(project.thumbnail.alt.length).toBeGreaterThan(0);
    }
  });

  it('returns no next project while only one exists', () => {
    expect(getNextProject('sora-matcha')).toBeUndefined();
  });
});

describe('journal content', () => {
  it('is empty but wired up', () => {
    expect(getAllJournalPosts()).toEqual([]);
  });
});
