import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseBlocks } from '@/components/case/CaseBlocks';
import { CaseHero } from '@/components/case/CaseHero';
import { CaseMetrics } from '@/components/case/CaseMetrics';
import { CaseNext } from '@/components/case/CaseNext';
import { CaseOverview } from '@/components/case/CaseOverview';
import { CaseSummary } from '@/components/case/CaseSummary';
import { ProjectJsonLd } from '@/components/seo/JsonLd';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { TextLink } from '@/components/ui/TextLink';
import {
  getAllProjects,
  getNextProject,
  getProjectBySlug,
} from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

/** Every project is prerendered at build time — no runtime data fetching. */
export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

/** Unknown slugs 404 rather than rendering on demand. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title} · ${project.kicker}`,
    description: project.seo?.description ?? project.summary,
    path: `/projects/${project.slug}`,
    type: 'article',
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      <ProjectJsonLd project={project} />

      <section className={styles.head}>
        <TextLink href="/work" flush>
          Back to work
        </TextLink>
        <p className={`${styles.eyebrow} eyebrow mono`}>
          Case {project.index} · {project.kicker} · {project.year}
        </p>
        <DisplayHeading lines={[project.title]} variant="case" />
        {/* For hero-led case studies, the hero statement + the first content
            block already open the story — repeating the same line here as a
            lede read as filler, not pacing. */}
        {!project.hero && <p className={`${styles.summary} lede`}>{project.summary}</p>}
      </section>

      {project.hero && <CaseHero hero={project.hero} />}

      {project.hero ? (
        <CaseOverview project={project} />
      ) : (
        <Section>
          <CaseSummary project={project} />
        </Section>
      )}

      <CaseBlocks blocks={project.blocks} slug={project.slug} />

      {/* The process lives on its own page. Offered after the story has been
          told, so it reads as depth for anyone who wants it rather than as
          more of the case study. */}
      {project.research && (
        <Section>
          <div className={styles.research}>
            <p className={`${styles.researchNote} lede`}>
              {project.research.intro}
            </p>
            <TextLink href={`/projects/${project.slug}/research`}>
              See the research
            </TextLink>
          </div>
        </Section>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <Section>
          <SectionHead marker="G" title="At a glance" note="Scope, not outcome" />
          <CaseMetrics metrics={project.metrics} />
        </Section>
      )}

      <Section>
        <CaseNext next={next} />
      </Section>
    </>
  );
}
