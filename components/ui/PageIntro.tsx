import { DisplayHeading } from '@/components/ui/DisplayHeading';
import styles from './PageIntro.module.css';

/**
 * Purpose: the standard opening block for every non-home route.
 * Props: `kicker` (small signal label), `lines` (display heading, one string
 *   per visual line), `note` (supporting paragraph), optional `accent` word.
 * Used in: work, about, capabilities, journal, contact, resume, 404.
 * Reusable: yes — every interior page opens with one.
 */
export function PageIntro({
  kicker,
  lines,
  note,
  accent,
}: {
  kicker: string;
  lines: readonly string[];
  note: string;
  accent?: string;
}) {
  return (
    <section className={styles.intro}>
      <p className={`${styles.eyebrow} eyebrow mono`}>{kicker}</p>
      <DisplayHeading lines={lines} accent={accent} variant="page" />
      <p className={`${styles.lede} lede`}>{note}</p>
    </section>
  );
}
