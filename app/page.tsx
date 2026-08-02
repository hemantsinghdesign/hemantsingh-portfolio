import type { Metadata } from 'next';
import { FeatureProject } from '@/components/work/FeatureProject';
import { Button } from '@/components/ui/Button';
import { ColumnGrid } from '@/components/ui/ColumnGrid';
import { Cta } from '@/components/ui/Cta';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { TextLink } from '@/components/ui/TextLink';
import { Ticker } from '@/components/ui/Ticker';
import { capabilities } from '@/content/site/capabilities';
import { homeHeadline, homeHeadlineAccent, homeIntro, ticker } from '@/content/site/about';
import { getAllProjects } from '@/lib/content/projects';
import { pageMetadata } from '@/lib/seo';
import { profile, siteConfig } from '@/lib/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  const projects = getAllProjects();
  const feature = projects[0];

  return (
    <>
      <section className={styles.hero}>
        <p className={`${styles.eyebrow} eyebrow mono`}>{profile.availability}</p>
        <DisplayHeading lines={homeHeadline} accent={homeHeadlineAccent} />
        <div className={styles.heroFoot}>
          <p className="lede">{homeIntro}</p>
          <Button href="/work">See the work</Button>
        </div>
      </section>

      <Ticker items={ticker} />

      {feature && (
        <Section>
          <SectionHead marker="A" title="Selected work" note="Latest" />
          <FeatureProject project={feature} priority />
          <TextLink href="/work">All work</TextLink>
        </Section>
      )}

      <Section>
        <SectionHead marker="B" title="What I do" note="Four areas" />
        <ColumnGrid
          items={capabilities.map((c) => ({
            marker: c.marker,
            title: c.title,
            body: c.body,
          }))}
        />
        <TextLink href="/capabilities">Capabilities in full</TextLink>
      </Section>

      <Cta />
    </>
  );
}
