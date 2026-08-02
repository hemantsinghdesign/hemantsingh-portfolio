import styles from './DisplayHeading.module.css';

/**
 * Purpose: renders a display heading as masked lines that rise into place,
 *   with one optional word in the signal colour.
 * Props: `lines` — one string per visual line; `accent` — a word inside those
 *   lines to highlight; `level` — h1 or h2; `variant` — type scale.
 * Used in: home hero, page heads, case titles, CTA, 404.
 * Reusable: yes — this is the site's only display type treatment.
 *
 * Lines are explicit rather than auto-wrapped: where a line breaks is a
 * typographic decision, and content should control it, not the viewport.
 */

const VARIANT_CLASS = {
  default: '',
  page: 'displayPage',
  case: 'displayCase',
  cta: 'displayCta',
} as const;

export function DisplayHeading({
  lines,
  accent,
  level = 1,
  variant = 'default',
}: {
  lines: readonly string[];
  accent?: string;
  level?: 1 | 2;
  variant?: keyof typeof VARIANT_CLASS;
}) {
  const Tag = level === 1 ? 'h1' : 'h2';

  return (
    <Tag className={`${styles.heading} display ${VARIANT_CLASS[variant]}`}>
      {lines.map((line, index) => (
        <span
          key={line}
          className="line"
          style={{ '--line-index': index } as React.CSSProperties}
        >
          <span>{accent ? highlight(line, accent) : line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Wraps the accent word in <em>, which typography.css colours. */
function highlight(line: string, accent: string): React.ReactNode {
  const index = line.indexOf(accent);
  if (index === -1) return line;

  return (
    <>
      {line.slice(0, index)}
      <em>{accent}</em>
      {line.slice(index + accent.length)}
    </>
  );
}
