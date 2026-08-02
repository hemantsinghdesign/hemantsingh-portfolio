import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

/**
 * Metadata builders.
 *
 * Every route calls `pageMetadata` so canonical URLs, Open Graph and Twitter
 * cards can never be forgotten or drift apart between routes.
 */

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  /** Root-relative image path. Falls back to the route's own OG image. */
  image?: string;
  type?: 'website' | 'article' | 'profile';
}): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [{ url: absoluteUrl(image) }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${siteConfig.name}`,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
