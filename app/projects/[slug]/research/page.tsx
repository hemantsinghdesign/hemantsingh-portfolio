import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseBlocks } from '@/components/case/CaseBlocks';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { TextLink } from '@/components/ui/TextLink';
import { getAllProjects, getProjectBySlug } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

/**
 * The process behind a case study, on its own page.
 *
 * The case study itself answers the three questions a reader actually has:
 * what the problem was, what was decided, and what came out of it. The
 * evidence for those decisions — the studies, the iterations, the dielines,
 * the things that did not work — is a different kind of reading, and putting
 * it in the same scroll buries the argument under the workings.
 *
 * Only projects that define `research` get a page. Nothing is generated for
 * the others and nothing links to a page that does not exist.
 */

export function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.research)
    .map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.research) return {};

  return pageMetadata({
    title: `${project.title} — Research`,
    description: project.research.intro,
    path: `/projects/${project.slug}/research`,
    type: 'article',
  });
}

export default async function ProjectResearchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.research) notFound();

  return (
    <>
      <section className={styles.head}>
        <TextLink href={`/projects/${project.slug}`} flush>
          Back to {project.title}
        </TextLink>
      </section>

      <PageIntro
        kicker={`${project.title} — Research`}
        lines={['The working out.']}
        note={project.research.intro}
      />

      <CaseBlocks blocks={project.research.blocks} slug={project.slug} dense />

      <Section>
        <div className={styles.back}>
          <TextLink href={`/projects/${project.slug}`}>
            Back to the case study
          </TextLink>
        </div>
      </Section>
    </>
  );
}
