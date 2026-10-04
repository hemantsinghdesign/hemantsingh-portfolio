import type { Metadata } from 'next';
import { WorkCollectionJsonLd } from '@/components/seo/JsonLd';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/work/ProjectCard';
import { getAllProjects } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Brand identity, packaging and art direction case studies by Hemant Singh: SORA, HSBC and Tadka Trail.',
  path: '/work',
});

/* Only published projects are listed. There used to be a fourth, empty
   "In progress" row here; it is gone until there is work to put in it. */
export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <WorkCollectionJsonLd />
      <PageIntro
        kicker="Work"
        lines={['Identity, packaging', 'and art direction.']}
        note="Three case studies, each showing what I designed and the decisions behind it."
      />

      <Section variant="tight" reveal={false}>
        <ul className={styles.list}>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} priority={index === 0} />
            </li>
          ))}
        </ul>
      </Section>

      <Cta />
    </>
  );
}
