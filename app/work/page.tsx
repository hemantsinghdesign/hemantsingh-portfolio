import type { Metadata } from 'next';
import { WorkCollectionJsonLd } from '@/components/seo/JsonLd';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { FeatureProject } from '@/components/work/FeatureProject';
import { ProjectRows } from '@/components/work/ProjectRows';
import { getAllProjects } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Selected identity, packaging and art direction projects, written up as full case studies.',
  path: '/work',
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <WorkCollectionJsonLd />
      <PageIntro
        kicker="Work"
        lines={['Identity, packaging', 'and art direction.']}
        note="Full case studies below. More projects are being written up — get in touch if you want to see something specific."
      />

      <Section variant="tight" reveal={false}>
        <ProjectRows projects={projects} showPending />
      </Section>

      {projects.map((project) => (
        <Section key={project.slug}>
          <FeatureProject project={project} />
        </Section>
      ))}

      <Cta />
    </>
  );
}
