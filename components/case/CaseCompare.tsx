import { Section } from '@/components/ui/Section';
import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import type { BlockOfType } from '@/types/content';
import styles from './CaseCompare.module.css';

/**
 * Purpose: a two-panel research beat — what was looked at, what was found.
 * Props: `block` — the `compare` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes — any project with a research phase shaped as
 *   "here's what I checked" / "here's what mattered."
 */
export function CaseCompare({ block, glyph }: { block: BlockOfType<'compare'> ; glyph?: ChapterGlyph }) {
  return (
    <Section>
      <SectionHead marker={block.marker} title={block.title} glyph={glyph} />
      <div className={styles.grid}>
        <div>
          <h3 className={styles.panelTitle}>{block.left.title}</h3>
          <ul className={styles.list}>
            {block.left.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.panelTitle}>{block.right.title}</h3>
          <p className={styles.finding}>{block.right.text}</p>
        </div>
      </div>
    </Section>
  );
}
