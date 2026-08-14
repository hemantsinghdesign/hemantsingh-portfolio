import { SectionHead, type ChapterGlyph } from '@/components/ui/SectionHead';
import { Section } from '@/components/ui/Section';
import type { BlockOfType } from '@/types/content';
import styles from './CaseTimeline.module.css';

/**
 * Purpose: a sequential journey/service-blueprint — stage, emotional
 *   temperature, and the design response at that stage. The native SVG
 *   plots each stage's `tone` (0–100) as a line, so the moment the feeling
 *   drops before it recovers is visible before a word is read.
 * Props: `block` — the `timeline` block from the project content.
 * Used in: CaseBlocks.
 * Reusable: yes, but sparingly by design — see the schema comment in
 *   lib/content/schema.ts. One per case study at most.
 *
 * Same list semantics as CaseSummary's approach steps (an <ol>, because
 * order is the content), styled as a row of stages rather than a stack so
 * the "before → during → after" shape reads at a glance on wide viewports.
 *
 * The line's draw-on is pure CSS (stroke-dasharray, keyed off the same
 * `.is-visible` class Reveal already adds to the section) — no JS
 * animation library, consistent with docs/routing-and-motion.md.
 */

const DIAGRAM_WIDTH = 1200;
const DIAGRAM_HEIGHT = 140;
const PAD_X = 40;
const PAD_Y = 24;

function buildPoints(steps: readonly { tone?: number }[]) {
  const n = steps.length;
  const usableW = DIAGRAM_WIDTH - PAD_X * 2;
  const usableH = DIAGRAM_HEIGHT - PAD_Y * 2;
  return steps.map((step, i) => {
    const tone = step.tone ?? 50;
    const x = n === 1 ? DIAGRAM_WIDTH / 2 : PAD_X + (usableW * i) / (n - 1);
    const y = PAD_Y + usableH * (1 - tone / 100);
    return { x, y };
  });
}

export function CaseTimeline({ block, glyph }: { block: BlockOfType<'timeline'> ; glyph?: ChapterGlyph }) {
  const points = buildPoints(block.steps);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join(' ');
  const hasTone = block.steps.some((s) => s.tone !== undefined);
  const firstFeeling = block.steps[0]?.feeling ?? '';
  const lastFeeling = block.steps.at(-1)?.feeling ?? '';

  return (
    <Section>
      <SectionHead marker={block.marker} title={block.title} note={block.note} glyph={glyph} />

      {hasTone && (
        <svg
          className={styles.diagram}
          viewBox={`0 0 ${DIAGRAM_WIDTH} ${DIAGRAM_HEIGHT}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={`How the feeling changes across the journey, from ${firstFeeling} to ${lastFeeling}`}
        >
          <line
            x1={PAD_X}
            y1={DIAGRAM_HEIGHT - PAD_Y}
            x2={DIAGRAM_WIDTH - PAD_X}
            y2={DIAGRAM_HEIGHT - PAD_Y}
            className={styles.baseline}
          />
          <path d={path} className={styles.line} pathLength={100} />
          {block.steps.map((step, i) => {
            const p = points[i];
            if (!p) return null;
            return <circle key={step.stage} cx={p.x} cy={p.y} r={5} className={styles.node} />;
          })}
        </svg>
      )}

      <ol
        className={styles.row}
        style={{ '--steps': block.steps.length } as React.CSSProperties}
      >
        {block.steps.map((step, i) => (
          <li className={styles.step} key={step.stage}>
            <span className={`${styles.index} mono`}>{String(i + 1).padStart(2, '0')}</span>
            <span className={`${styles.feeling} mono`}>{step.feeling}</span>
            <h3 className={styles.stage}>{step.stage}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
