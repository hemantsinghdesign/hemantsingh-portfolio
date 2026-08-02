import type { MetadataRoute } from 'next';
import { profile, siteConfig } from '@/lib/site';

/**
 * Web app manifest. Not a PWA — this exists so an installed shortcut or an
 * Android home-screen tile uses the site's own paper and ink rather than a
 * browser default.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: profile.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#EDEDE8',
    theme_color: '#EDEDE8',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
