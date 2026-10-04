import type { Metadata } from 'next';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { about } from '@/content/site/about';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Hemant Singh, graphic designer working on brand identity, packaging and art direction. Background, experience and tools.',
  path: '/about',
  type: 'profile',
});

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="About" lines={['Hi, I’m Hemant.']} note={about.lede} />

      <Section>
        <div className={styles.grid}>
          {/* A drawn block, not a photograph. A portrait is optional; to add
              one, replace this element with a next/image of it. */}
          <div className={styles.portrait} aria-hidden="true">
            <span className={styles.portraitBlock} />
            <span className={styles.portraitArc} />
            <span className={`${styles.portraitTag} mono`}>HS</span>
          </div>

          <div className={styles.body}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead marker="A" title="Experience and education" note="Most recent first" />
        <ul className={styles.experience}>
          {about.experience.map((entry) => (
            <li key={`${entry.years}-${entry.title}`} className={styles.entry}>
              <span className={`${styles.years} mono`}>{entry.years}</span>
              <span className={styles.role}>{entry.title}</span>
              <span className={styles.place}>{entry.place}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className={styles.facts}>
          <div>
            <SectionHead marker="B" title="Tools" note="Day to day" />
            <p className={styles.tools}>{about.tools}</p>
          </div>
          <div>
            <SectionHead marker="C" title="Languages" note="Written and spoken" />
            <p className={styles.tools}>{about.languages}</p>
          </div>
        </div>
      </Section>

      <Cta />
    </>
  );
}
