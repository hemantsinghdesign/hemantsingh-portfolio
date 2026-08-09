import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

/**
 * Crawl rules. Everything is public except Next's internals and the API
 * surface, neither of which has anything worth indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    // `host` takes a bare hostname — a full URL with scheme and trailing
    // slash is ignored by the crawlers that read the directive at all.
    host: new URL(siteConfig.url).host,
  };
}
