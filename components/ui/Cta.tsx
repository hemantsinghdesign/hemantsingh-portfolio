import { Button } from '@/components/ui/Button';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Cta.module.css';

/**
 * Purpose: the closing "Start something with structure" block.
 * Props: none.
 * Used in: home, work, about, capabilities, journal.
 * Reusable: yes — the site's single closing CTA.
 */
export function Cta() {
  return (
    <Reveal className={styles.cta}>
      <DisplayHeading
        lines={['Start something', 'with structure.']}
        accent="structure"
        level={2}
        variant="cta"
      />
      <div className={styles.button}>
        <Button href="/contact" size="large">
          Get in touch
        </Button>
      </div>
    </Reveal>
  );
}
