import { getAllProjects } from '@/lib/content/projects';
import { absoluteUrl, profile, siteConfig, socials } from '@/lib/site';
import type { Project } from '@/types/content';

/**
 * Purpose: structured data for Google — who the site belongs to, what it is,
 *   what each case study is, and where the visitor sits in the hierarchy.
 * Props: vary per component; see each export.
 * Used in: root layout (Person, WebSite) and case study routes
 *   (CreativeWork, Breadcrumb).
 * Reusable: yes — add new schema types here rather than inline in routes.
 *
 * Rendered server-side as a JSON-LD script tag, so crawlers see it in the
 * initial HTML. `JSON.stringify` output is escaped for `<` to avoid closing
 * the script element early.
 */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function PersonJsonLd() {
  const sameAs = socials.filter((s) => s.url.length > 0).map((s) => s.url);

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': absoluteUrl('/#person'),
        name: profile.name,
        jobTitle: profile.role,
        url: siteConfig.url,
        email: `mailto:${profile.email}`,
        description: siteConfig.description,
        knowsAbout: [
          'Brand identity',
          'Packaging design',
          'Art direction',
          'Typography',
          'Editorial design',
        ],
        ...(sameAs.length > 0 ? { sameAs } : {}),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.lang,
        publisher: { '@id': absoluteUrl('/#person') },
      }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const path = `/projects/${project.slug}`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          '@id': absoluteUrl(`${path}#work`),
          name: project.title,
          headline: `${project.title} · ${project.kicker}`,
          description: project.summary,
          url: absoluteUrl(path),
          dateCreated: project.year,
          inLanguage: siteConfig.lang,
          image: absoluteUrl(project.thumbnail.src),
          creator: { '@id': absoluteUrl('/#person') },
          keywords: project.discipline.split(' · '),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Index', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Work', item: absoluteUrl('/work') },
            {
              '@type': 'ListItem',
              position: 3,
              name: project.title,
              item: absoluteUrl(path),
            },
          ],
        }}
      />
    </>
  );
}

export function WorkCollectionJsonLd() {
  const projects = getAllProjects();

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/work#collection'),
        name: 'Work',
        url: absoluteUrl('/work'),
        inLanguage: siteConfig.lang,
        hasPart: projects.map((project) => ({
          '@type': 'CreativeWork',
          name: project.title,
          url: absoluteUrl(`/projects/${project.slug}`),
          description: project.summary,
        })),
      }}
    />
  );
}
