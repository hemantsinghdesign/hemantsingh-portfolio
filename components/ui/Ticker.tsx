'use client';

import { useState } from 'react';
import styles from './Ticker.module.css';

/**
 * Purpose: the scrolling band of disciplines beneath the home introduction.
 * Props: `items` — the words to cycle through.
 * Used in: home page.
 * Reusable: yes, though currently only used once.
 *
 * How the loop stays seamless
 * ---------------------------
 * The track holds two identical groups side by side and slides left by
 * exactly one group, then starts again — so the frame at the end of a cycle
 * is pixel-identical to the frame at the start.
 *
 * That only works if "one group" is what -50% actually measures. The old
 * version translated a flex row whose box was the width of the *container*,
 * not of its content, so -50% moved half a viewport while one copy of the
 * words was far wider. Measured on the production build: 177px moved
 * against a 796px copy at 390px wide, 664px against 1196px at 1440px. Every
 * cycle snapped back mid-sentence. `width: max-content` on the track makes
 * -50% mean one group exactly, and because it is a percentage of the real
 * content it stays correct when the font loads late or the viewport changes,
 * with no JavaScript measuring anything.
 *
 * The second fault was a blank interval on wide screens: one copy of the
 * seven words is ~1200px at the largest size, narrower than a 1440px window,
 * so the tail of the band emptied before the loop restarted. Each group now
 * repeats the words SETS times, which keeps a group wider than any screen it
 * is likely to meet (four sets is ~4800px at the largest size).
 *
 * Speed is per set, not per cycle: the duration scales with SETS, so adding
 * repetitions makes the band longer without making it faster.
 *
 * Accessibility: the moving words are decorative and also appear as real
 * text on /capabilities, so the track is hidden from assistive technology —
 * which also stops a screen reader announcing every duplicate. Motion that
 * runs for more than five seconds alongside other content needs a way to
 * stop it (WCAG 2.2.2), so there is a real button for that. Under
 * prefers-reduced-motion the band does not move at all and the button is
 * not shown, since there is nothing to pause.
 */

const SETS = 4;

export function Ticker({ items }: { items: readonly string[] }) {
  const [isPaused, setPaused] = useState(false);

  const group = (copy: number) => (
    <span className={styles.group} key={copy}>
      {Array.from({ length: SETS }, (_, set) =>
        items.map((item) => (
          <span className={styles.item} key={`${set}-${item}`}>
            {item}
            <i className={styles.diamond}>◆</i>
          </span>
        )),
      )}
    </span>
  );

  return (
    <div className={styles.ticker} data-paused={isPaused || undefined}>
      <div
        className={styles.track}
        style={{ '--sets': SETS } as React.CSSProperties}
        aria-hidden="true"
      >
        {group(0)}
        {group(1)}
      </div>

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((value) => !value)}
        aria-label={isPaused ? 'Play the scrolling list of disciplines' : 'Pause the scrolling list of disciplines'}
      >
        <span aria-hidden="true">{isPaused ? '▶' : '❚❚'}</span>
      </button>
    </div>
  );
}
