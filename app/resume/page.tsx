import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { about } from '@/content/site/about';
import { capabilities } from '@/content/site/capabilities';
import { getAllProjects } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import { profile } from '@/lib/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Resume',
  description: `${profile.name} — ${profile.role}. Experience, capabilities and selected work.`,
  path: '/resume',
  type: 'profile',
});

export default function ResumePage() {
  const projects = getAllProjects();

  return (
    <>
      <PageIntro
        kicker="Resume"
        lines={['The short', 'version.']}
        note={about.lede}
      />

      <Section variant="tight">
        <SectionHead marker="A" title="Selected work" note="Case studies" />
        <ul className={styles.list}>
          {projects.map((project) => (
            <li className={styles.item} key={project.slug}>
              <span className={`${styles.year} mono`}>{project.year}</span>
              <span className={styles.title}>
                {project.title}
                <em className={styles.detail}> — {project.discipline}</em>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHead marker="B" title="Capabilities" note="Four areas" />
        <ul className={styles.list}>
          {capabilities.map((capability) => (
            <li className={styles.item} key={capability.marker}>
              <span className={`${styles.year} mono`}>{capability.marker}</span>
              <span className={styles.title}>
                {capability.title}
                <em className={styles.detail}> — {capability.items.join(', ')}</em>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHead marker="C" title="Tools" note="Day to day" />
        <p className={styles.tools}>{about.tools}</p>
        {/* Drop resume.pdf into /public and this button will serve it. */}
        <div className={styles.actions}>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
