'use client';

import { motion } from 'framer-motion';
import styles from './TransitionOverlay.module.css';

/**
 * Purpose: the vermilion sheet that sweeps across the viewport during a
 *   route change, carrying the incoming page's name.
 * Props: `phase` — 'covering' slides in from the right, 'revealing' slides
 *   out to the left; `label` — the page name; `onRevealed` — fired when the
 *   sheet has cleared the screen.
 * Used in: PageTransition only, via a dynamic import.
 * Reusable: no — it is one half of the route transition.
 *
 * This is the only module that imports Framer Motion. It is loaded with
 * `next/dynamic({ ssr: false })`, so the library sits in its own chunk and
 * never lands in the initial bundle or the server render.
 */

const EASE = [0.2, 0.8, 0.2, 1] as const;

export function TransitionOverlay({
  phase,
  label,
  onRevealed,
}: {
  phase: 'covering' | 'revealing';
  label: string;
  onRevealed: () => void;
}) {
  const isCovering = phase === 'covering';

  return (
    <motion.div
      className={styles.sheet}
      aria-hidden="true"
      initial={{ x: isCovering ? '101%' : '0%' }}
      animate={{ x: isCovering ? '0%' : '-101%' }}
      transition={{ duration: isCovering ? 0.46 : 0.62, ease: EASE }}
      onAnimationComplete={() => {
        if (!isCovering) onRevealed();
      }}
    >
      <motion.span
        className={styles.label}
        initial={{ opacity: isCovering ? 0 : 1, y: isCovering ? 24 : 0 }}
        animate={{ opacity: isCovering ? 1 : 0, y: isCovering ? 0 : -18 }}
        transition={{ duration: isCovering ? 0.4 : 0.4, ease: EASE }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
