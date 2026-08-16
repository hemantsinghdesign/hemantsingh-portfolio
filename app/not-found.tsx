import { Button } from '@/components/ui/Button';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { TextLink } from '@/components/ui/TextLink';
import styles from './not-found.module.css';

/**
 * 404. Rendered inside the root layout, so it keeps the site chrome —
 * a visitor who lands here from a stale link still has the full navigation.
 */
export default function NotFound() {
  return (
    <section className={styles.lost}>
      <p className={`${styles.eyebrow} eyebrow mono`}>Error 404 · off grid</p>
      <DisplayHeading lines={['This page is', 'outside the margin.']} accent="margin" />
      <p className={`${styles.note} lede`}>
        Nothing is set here. Try the index, or go straight to the work.
      </p>
      <div className={styles.actions}>
        <Button href="/">Back to index</Button>
        <TextLink href="/work" flush>
          See the work
        </TextLink>
      </div>
    </section>
  );
}
