import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
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

  /**
   * The declared size is what Next reserves space with, so a src pointing at
   * a differently shaped file lays the page out wrong and shows up only by
   * eye. Renaming or re-exporting artwork is when that happens.
   *
   * Being honest about the limit: this would NOT have caught the SORA bug it
   * was written after, where five images sat under each other's filenames.
   * Four of the five were the same 927×1147, so the sizes all checked out
   * while every caption described a picture the reader was not looking at.
   * No assertion can read a photograph — only opening the files catches that.
   * What this does catch is the adjacent failure that is otherwise silent
   * until someone loads the page.
   */
  it('points every image at a real file of the declared size', async () => {
    const images = projects.flatMap((project) => [
      project.thumbnail,
      ...project.blocks.flatMap((block) => {
        if ('image' in block) return [block.image];
        if ('images' in block) return block.images;
        return [];
      }),
    ]);

    for (const image of images) {
      const file = path.join(process.cwd(), 'public', image.src);
      expect(existsSync(file), `missing asset: ${image.src}`).toBe(true);

      const { width, height } = await sharp(file).metadata();
      expect(
        { src: image.src, width, height },
        `declared size does not match the file: ${image.src}`,
      ).toEqual({ src: image.src, width: image.width, height: image.height });
    }
  });

  it('gives every non-decorative image alt text', () => {
    for (const project of projects) {
      expect(project.thumbnail.alt.length).toBeGreaterThan(0);
    }
  });

  it('wraps to the next project, and back around from the last one', () => {
    // Order-independent: adding a project must not break this test.
    const order = getAllProjects();
    order.forEach((project, i) => {
      const expected = order[(i + 1) % order.length];
      expect(getNextProject(project.slug)?.slug).toBe(expected?.slug);
    });
    // The last one wraps to the first.
    const last = order[order.length - 1];
    expect(getNextProject(last!.slug)?.slug).toBe(order[0]?.slug);
  });

  it('returns undefined for an unknown slug', () => {
    expect(getNextProject('does-not-exist')).toBeUndefined();
  });
});

describe('journal content', () => {
  it('is empty but wired up', () => {
    expect(getAllJournalPosts()).toEqual([]);
  });
});
