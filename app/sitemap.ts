import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/content/projects';
import { getAllJournalPosts } from '@/lib/content/journal';
import { absoluteUrl } from '@/lib/site';

/**
 * Sitemap, derived from the content layer rather than hand-maintained, so a
 * new project appears the moment its content file is registered.
 *
 * Journal is included only once it has posts — submitting an empty section
 * to Search Console invites a soft-404.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), priority: 1, changeFrequency: 'monthly' },
    { url: absoluteUrl('/work'), priority: 0.9, changeFrequency: 'monthly' },
    { url: absoluteUrl('/about'), priority: 0.7, changeFrequency: 'yearly' },
    { url: absoluteUrl('/capabilities'), priority: 0.7, changeFrequency: 'yearly' },
    { url: absoluteUrl('/contact'), priority: 0.6, changeFrequency: 'yearly' },
    { url: absoluteUrl('/resume'), priority: 0.4, changeFrequency: 'yearly' },
  ];

  const projects: MetadataRoute.Sitemap = getAllProjects().flatMap((project) => [
    {
      url: absoluteUrl(`/projects/${project.slug}`),
      priority: 0.8,
      changeFrequency: 'yearly' as const,
    },
    // The research page is a real route with its own content, so it is
    // crawlable — ranked below the case study it supports.
    ...(project.research
      ? [
          {
            url: absoluteUrl(`/projects/${project.slug}/research`),
            priority: 0.5,
            changeFrequency: 'yearly' as const,
          },
        ]
      : []),
  ]);

  const posts = getAllJournalPosts();
  const journal: MetadataRoute.Sitemap =
    posts.length === 0
      ? []
      : [
          { url: absoluteUrl('/journal'), priority: 0.6, changeFrequency: 'weekly' },
          ...posts.map((post) => ({
            url: absoluteUrl(`/journal/${post.slug}`),
            priority: 0.5,
            changeFrequency: 'yearly' as const,
          })),
        ];

  return [...core, ...projects, ...journal].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
