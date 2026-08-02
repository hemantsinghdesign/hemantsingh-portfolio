import { renderOgImage, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';
import { profile, siteConfig } from '@/lib/site';

/** Default social card for every route without its own. */
export const alt = siteConfig.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    kicker: profile.role,
    title: 'Hemant Singh',
    note: 'Identity, packaging and art direction',
  });
}
