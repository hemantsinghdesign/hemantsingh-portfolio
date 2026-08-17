import type { Metadata } from 'next';
import { WorkCollectionJsonLd } from '@/components/seo/JsonLd';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
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
        note="Full case studies below. More are being written up, so get in touch if you want to see something specific."
      />

      <Section variant="tight" reveal={false}>
        <ProjectRows projects={projects} showPending />
      </Section>

      <Cta />
    </>
  );
}
