import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Cta } from '@/components/ui/Cta';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { TextLink } from '@/components/ui/TextLink';
import { Ticker } from '@/components/ui/Ticker';
import { TransitionLink } from '@/components/ui/TransitionLink';
import { ProjectCard } from '@/components/work/ProjectCard';
import { capabilities } from '@/content/site/capabilities';
import { homeHeadline, homeHeadlineAccent, homeImage, homeIntro, ticker } from '@/content/site/home';
import { getAllProjects, getProjectBySlug } from '@/lib/content/projects';
import { IMAGE_QUALITY } from '@/lib/images';
import { pageMetadata } from '@/lib/seo';
import { profile, siteConfig } from '@/lib/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
});

/**
 * Order, top to bottom: a short introduction, one large piece of work, the
 * case studies, then what I do and how to reach me.
 *
 * The introduction used to fill the whole first screen with a headline, so
 * the first piece of work appeared only after a full scroll. The statement
 * now sits beside the work image on wide screens and directly above it on
 * phones, so a visitor sees the work within the first screen either way.
 *
 * The image and every word of copy live in content/site/home.ts.
 */
export default function HomePage() {
  const projects = getAllProjects();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={`${styles.eyebrow} eyebrow mono`}>{profile.availability}</p>
          <DisplayHeading lines={homeHeadline} accent={homeHeadlineAccent} variant="hero" />
          <p className={`${styles.lede} lede`}>{homeIntro}</p>
          <div className={styles.actions}>
            <Button href="#work">See the work</Button>
            <TextLink href="/contact" flush>
              Get in touch
            </TextLink>
          </div>
        </div>

        <figure className={styles.poster}>
          <TransitionLink href={homeImage.href} className={styles.posterLink}>
            <Image
              className={styles.posterImage}
              src={homeImage.src}
              alt={homeImage.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              quality={IMAGE_QUALITY}
              placeholder={homeImage.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={homeImage.blurDataURL}
              style={{ objectPosition: homeImage.focus ?? '50% 50%' }}
            />
          </TransitionLink>
          <figcaption className={`${styles.credit} mono`}>{homeImage.credit}</figcaption>
        </figure>
      </section>

      <Ticker items={ticker} />

      <Section>
        <div id="work" className={styles.anchor} />
        <SectionHead marker="A" title="Selected work" note={`${projects.length} case studies`} />
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} layout="tile" headingLevel={3} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHead marker="B" title="What I do" note="With the work that shows it" />
        <ul className={styles.capabilities}>
          {capabilities.map((capability) => (
            <li key={capability.marker} className={styles.capability}>
              <span className={`${styles.marker} mono`}>{capability.marker}</span>
              <h3 className={styles.capabilityTitle}>{capability.title}</h3>
              <p className={styles.capabilityBody}>{capability.short}</p>
              <p className={`${styles.seen} mono`}>
                Seen in{' '}
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
            </li>
          ))}
        </ul>
        <TextLink href="/capabilities">Capabilities in full</TextLink>
      </Section>

      <Cta />
    </>
  );
}
