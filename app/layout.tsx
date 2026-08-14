import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PageTransition } from '@/components/layout/PageTransition';
import { SiteChrome } from '@/components/layout/SiteChrome';
import { PersonJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';
import '@/styles/globals.css';

/**
 * Root metadata. Every route inherits this and overrides what it needs.
 * `metadataBase` is what lets child routes use relative OG image paths.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // No canonical here on purpose. Every real route sets its own via
  // `pageMetadata`; a canonical declared at the root is inherited by
  // not-found.tsx, which would tell crawlers that every unknown URL is
  // the home page.
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#EDEDE8',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.lang} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PersonJsonLd />
        <WebSiteJsonLd />
        <PageTransition>
          <SiteChrome>{children}</SiteChrome>
        </PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
