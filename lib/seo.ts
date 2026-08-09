import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

/**
 * Metadata builders.
 *
 * Every route calls `pageMetadata` so canonical URLs, Open Graph and Twitter
 * cards can never be forgotten or drift apart between routes.
 */

/**
 * Social cards get the name appended so a shared link identifies its owner,
 * which the document <title> gets from the root layout's template. A title
 * that already carries the name (the home page passes `siteConfig.title`)
 * is left alone — otherwise the card reads "… — Hemant Singh — Hemant Singh".
 */
function socialTitle(title: string): string {
  return title.includes(siteConfig.name) ? title : `${title} — ${siteConfig.name}`;
}

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
  const social = socialTitle(title);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: social,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: social,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
