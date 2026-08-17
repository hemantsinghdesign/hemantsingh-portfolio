/**
 * Site-wide configuration.
 * Everything that appears in more than one place lives here.
 *
 * `url` is the single source for every canonical tag, the sitemap,
 * robots.txt, the Open Graph image URLs and the JSON-LD. Whatever it holds
 * is what the site tells search engines it is.
 *
 * It must therefore match the domain the site is actually served from. If it
 * says `*.vercel.app` while visitors arrive on hemantsingh.design, every page
 * on the custom domain declares the .vercel.app copy as the real one, and
 * that is the copy Google indexes. Set NEXT_PUBLIC_SITE_URL in Vercel and
 * redeploy after changing domains; see "Connecting hemantsingh.design" in
 * the README. The fallback below keeps local builds producing valid
 * absolute URLs.
 */

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hemantsingh.design',
  name: 'Hemant Singh',
  role: 'Graphic & brand designer',
  title: 'Hemant Singh, Graphic & Brand Designer',
  description:
    'Graphic and brand designer working in identity, packaging and art direction. I build systems with fewer parts, documented well enough to run without me.',
  locale: 'en_GB',
  lang: 'en-GB',
} as const;

export const profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  email: 'hemantsinghuk2024@gmail.com',
  availability: 'Available for freelance and full-time work',
  working: 'Independent · working remotely',
} as const;

/** Only rendered when a url is present, so empty entries are safe to leave. */
export const socials = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/hemant-singh-15826b152' },
  { label: 'Instagram', url: '' },
  { label: 'Behance', url: '' },
] as const;

export const nav = [
  { href: '/', label: 'Index' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/contact', label: 'Contact' },
] as const;

/*
 * `/journal` and `/resume` exist and are crawlable but are deliberately not
 * in `nav` — journal stays out until the first article is published, since an
 * empty section reads as abandoned rather than forthcoming. They are listed
 * in app/sitemap.ts, which is the only place that needs to know.
 */

/** Resolves a path to an absolute URL for canonicals, OG tags and sitemaps. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.url).toString();
}
