import type { Metadata } from 'next';
import { ColumnGrid } from '@/components/ui/ColumnGrid';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { capabilities } from '@/content/site/capabilities';
import { engagements, process } from '@/content/site/process';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Capabilities',
  description:
    'Brand identity, packaging, art direction and editorial design. How each engagement works and what it includes.',
  path: '/capabilities',
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageIntro
        kicker="Capabilities"
        lines={['Four things,', 'done properly.']}
        note="Projects usually run from a single pack layout to a full identity system. Tell me what you need and I will tell you what it takes."
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
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead marker="A" title="How I work" note="Four steps, in order" />
        <ColumnGrid
          items={process.map((step) => ({
            marker: step.step,
            title: step.title,
            body: step.body,
          }))}
        />
      </Section>

      <Section>
        <SectionHead marker="B" title="Ways to work together" note="Pick a shape" />
        <ColumnGrid
          columns={3}
          items={engagements.map((item) => ({
            marker: item.detail,
            title: item.title,
            body: item.body,
          }))}
        />
      </Section>

      <Cta />
    </>
  );
}
