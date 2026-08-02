import { renderOgImage, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';
import { getAllProjects, getProjectBySlug } from '@/lib/content/projects';

/**
 * Per-project social card. Generated at build time for each slug, so every
 * case study has its own Open Graph and Twitter image with no runtime cost.
 */
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return renderOgImage({
    kicker: project ? `${project.kicker} — ${project.year}` : 'Case study',
    title: project?.title ?? 'Work',
    note: project?.discipline ?? 'Identity, packaging and art direction',
  });
}
