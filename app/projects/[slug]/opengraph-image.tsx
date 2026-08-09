import { renderOgImage, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og';
import { getAllProjects, getProjectBySlug } from '@/lib/content/projects';

/**
 * Per-project social card. Generated at build time for each slug, so every
 * case study has its own Open Graph and Twitter image with no runtime cost.
 */
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/**
 * Describes the card so a shared link is not an unlabelled image. Static
 * rather than per-project on purpose: deriving it per slug means
 * `generateImageMetadata`, which moves these off the build-time path and
 * gives every card a runtime cost for one line of alt text.
 */
export const alt = 'Case study — Hemant Singh, graphic & brand designer';

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
