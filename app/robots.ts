import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/**
 * Crawl rules. Everything is public except Next's internals and the API
 * surface, neither of which has anything worth indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
