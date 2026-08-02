'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import styles from './error.module.css';

/**
 * Route error boundary. Client component by requirement — Next needs the
 * reset handler to run in the browser.
 *
 * It shows the digest rather than the raw message: the digest is a stable
 * id that can be matched against server logs, while the message may contain
 * internals that should not be on screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.shell}>
      <p className={`${styles.eyebrow} eyebrow mono`}>Something broke</p>
      <DisplayHeading
        lines={['This page did not', 'come off the press.']}
        accent="not"
        variant="page"
      />
      <p className={`${styles.note} lede`}>
        An unexpected error stopped this page rendering. Trying again usually
        works; if it does not, the index is still there.
      </p>
      <div className={styles.actions}>
        <Button onClick={reset}>Try again</Button>
        <Button href="/">Back to index</Button>
      </div>
      {error.digest && (
        <p className={`${styles.digest} mono`}>Reference {error.digest}</p>
      )}
    </section>
  );
}
