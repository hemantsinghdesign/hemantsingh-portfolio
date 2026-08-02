import type { Metadata } from 'next';
import { Cta } from '@/components/ui/Cta';
import { PageIntro } from '@/components/ui/PageIntro';
import { Section } from '@/components/ui/Section';
import { getAllJournalPosts } from '@/lib/content/journal';
import { pageMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Journal',
  description:
    'Notes on identity, packaging and the craft of building brand systems that survive handover.',
  path: '/journal',
});

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <>
      <PageIntro
        kicker="Journal"
        lines={['Notes, when', 'there is something', 'worth writing.']}
        note="Occasional writing on identity, packaging and the parts of the craft that do not fit in a case study."
      />

      <Section variant="tight">
        {posts.length === 0 ? (
          <p className={styles.empty}>
            Nothing published yet. The first entry is being written.
          </p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.item}>
                <span className={`${styles.date} mono`}>{post.date}</span>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.summary}>{post.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Cta />
    </>
  );
}
