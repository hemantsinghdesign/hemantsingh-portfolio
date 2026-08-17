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
  description: about.lede,
  path: '/about',
  type: 'profile',
});

export default function AboutPage() {
  return (
    <>
      <PageIntro kicker="About" lines={['Hi, I am Hemant.']} note={about.lede} />

      <Section>
        <div className={styles.grid}>
          {/* Replace this block with a photograph when you have one. */}
          <div className={styles.portrait} aria-hidden="true">
            <span className={styles.portraitBlock} />
            <span className={styles.portraitArc} />
            <span className={`${styles.portraitTag} mono`}>HS</span>
          </div>

          <div className={styles.body}>
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? styles.lead : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead marker="A" title="Tools" note="Day to day" />
        <p className={styles.tools}>{about.tools}</p>
      </Section>

      <Cta />
    </>
  );
}
