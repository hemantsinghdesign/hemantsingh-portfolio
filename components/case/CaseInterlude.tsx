import type { BlockOfType } from '@/types/content';
import { Reveal } from '@/components/ui/Reveal';
import styles from './CaseInterlude.module.css';

/**
 * Purpose: a full-screen, minimal editorial statement — the emotional
 *   heart of a case study. Used at most twice per project: once to open
 *   an idea (the insight), once to close one (the reflection).
 * Props: `block` — the `interlude` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes, but its power is scarcity — see the schema comment in
 *   lib/content/schema.ts.
 */
export function CaseInterlude({ block }: { block: BlockOfType<'interlude'> }) {
  return (
    <Reveal as="section" className={styles.frame}>
      {block.lines.map((line) => (
        <p className={styles.line} key={line}>
          {line}
        </p>
      ))}
    </Reveal>
  );
}
