/** @type {import('next').NextConfig} */

/**
 * Content Security Policy.
 * `unsafe-inline` on style-src is required by Next's inlined critical CSS.
 * `unsafe-eval` is dev-only (React Refresh); it is dropped in production.
 */
const isDev = process.env.NODE_ENV === 'development';

/**
 * `upgrade-insecure-requests` is right in production and meaningless anywhere
 * the site is not served over TLS. It is also actively harmful there: WebKit
 * applies it to localhost — Chromium exempts it — so every page-initiated
 * navigation on an http test server is upgraded to https and fails the
 * handshake. Emitted only when the site really is https.
 */
const isHttps = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hemantsingh.design'
).startsWith('https:');

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com",
  "manifest-src 'self'",
  ...(isHttps ? ['upgrade-insecure-requests'] : []),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Pin the workspace root so Turbopack never guesses from a parent lockfile.
  turbopack: { root: import.meta.dirname },

  // Fail the production build on type errors rather than shipping them.
  // ESLint is not part of `next build` in Next 16 — it runs as its own
  // step via `npm run lint` (and `npm run check` before a release).
  typescript: { ignoreBuildErrors: false },

  images: {
    // AVIF first, WebP fallback. Both are generated at build/request time.
    formats: ['image/avif', 'image/webp'],
    // Next only permits qualities listed here. 95 is used for case-study
    // artwork, 85 for thumbnails — see lib/images.ts.
    qualities: [85, 95],
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1600, 1920, 2560],
    imageSizes: [96, 160, 240, 320, 420, 560],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      // Next already sets immutable caching on fingerprinted assets, so the
      // only headers we add are security ones.
      { source: '/:path*', headers: securityHeaders },
    ];
  },
};

export default nextConfig;
