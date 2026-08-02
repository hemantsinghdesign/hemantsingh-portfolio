import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { pageMetadata } from '@/lib/seo';
import { profile, socials } from '@/lib/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch about identity, packaging or art direction work. Replies within two working days.',
  path: '/contact',
});

export default function ContactPage() {
  const activeSocials = socials.filter((social) => social.url.length > 0);

  return (
    <>
      <PageIntro
        kicker="Contact"
        lines={['Tell me what', 'you are making.']}
        note="A paragraph is plenty. I reply to everything within two working days."
      />

      <Section>
        <div className={styles.grid}>
          <dl className={styles.facts}>
            <div>
              <dt className={`${styles.key} mono`}>Email</dt>
              <dd className={styles.value}>
                <a className={styles.link} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            {activeSocials.map((social) => (
              <div key={social.label}>
                <dt className={`${styles.key} mono`}>{social.label}</dt>
                <dd className={styles.value}>
                  <a
                    className={styles.link}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {social.label}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className={`${styles.key} mono`}>Availability</dt>
              <dd className={styles.value}>{profile.availability}</dd>
            </div>
            <div>
              <dt className={`${styles.key} mono`}>Working</dt>
              <dd className={styles.value}>{profile.working}</dd>
            </div>
          </dl>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
