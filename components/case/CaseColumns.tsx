import { ColumnGrid } from '@/components/ui/ColumnGrid';
import { Section } from '@/components/ui/Section';
import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import type { BlockOfType } from '@/types/content';

/**
 * Purpose: a titled set of 2–4 principles/points inside a case study,
 *   rendered with the site's existing ColumnGrid (already used on home
 *   and capabilities) rather than a bespoke grid.
 * Props: `block` — the `columns` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes.
 */
export function CaseColumns({ block, glyph }: { block: BlockOfType<'columns'> ; glyph?: ChapterGlyph }) {
  return (
    <Section>
      <SectionHead marker={block.marker} title={block.title} note={block.note} glyph={glyph} />
      <ColumnGrid items={block.items} columns={block.items.length === 4 ? 4 : 3} />
    </Section>
  );
}
