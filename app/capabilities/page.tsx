import type { Metadata } from 'next';
import Link from 'next/link';
import { ColumnGrid } from '@/components/ui/ColumnGrid';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { capabilities } from '@/content/site/capabilities';
import { engagements, process } from '@/content/site/process';
import { getProjectBySlug } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Capabilities',
  description:
    'Brand identity, packaging, art direction, illustration and brand touchpoints, each linked to the case studies that show it.',
  path: '/capabilities',
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        kicker="Capabilities"
        lines={['What I can', 'design for you.']}
        note="Each area below links to the case studies where you can see it in the work."
      />

      <Section>
        <div className={styles.grid}>
          {capabilities.map((capability) => (
            <article className={styles.card} key={capability.marker}>
              <span className={`${styles.marker} mono`}>{capability.marker}</span>
              <h2 className={styles.title}>{capability.title}</h2>
              <p className={styles.body}>{capability.body}</p>
              <ul className={styles.list}>
                {capability.items.map((item) => (
                  <li className="mono" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.seen} mono`}>
                See it in{' '}
                {capability.work.map((slug, index) => {
                  const project = getProjectBySlug(slug);
                  if (!project) return null;
                  return (
                    <span key={slug}>
                      {index > 0 && ', '}
                      <Link href={`/projects/${slug}`}>{project.title}</Link>
                    </span>
                  );
                })}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead marker="A" title="How I work" note="Four stages" />
        <ColumnGrid
          items={process.map((step) => ({
            marker: step.step,
            title: step.title,
            body: step.body,
          }))}
        />
      </Section>

      <Section>
        <SectionHead marker="B" title="Working together" note="Projects and roles" />
        <div className={styles.grid}>
          {engagements.map((item) => (
            <article className={styles.card} key={item.title}>
              <span className={`${styles.marker} mono`}>{item.detail}</span>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.body}>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
