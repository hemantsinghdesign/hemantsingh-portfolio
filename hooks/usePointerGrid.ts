'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Purpose: tracks the pointer for the custom cursor and the grid coordinate
 *   readout, without re-rendering React on every mouse move.
 * Props: none — this is a hook.
 * Used in: PointerProvider (which shares one listener with Cursor and SpecBar).
 * Reusable: yes, but there should only ever be one instance mounted.
 *
 * Two separate channels on purpose:
 *
 * 1. Position is written straight to CSS custom properties on <html> inside a
 *    requestAnimationFrame. React never sees it, so a 120Hz mouse costs zero
 *    renders. Components read `var(--pointer-x)` in a transform.
 *
 * 2. The column/row cell only changes when the pointer crosses a grid line —
 *    12 columns by 24 rows — so it is cheap to keep in state. Setting it only
 *    on change turns roughly 120 renders per second into a handful.
 */

export interface GridCell {
  /** Zero-padded column, "01"–"12". */
  col: string;
  /** Zero-padded row, "01"–"24". */
  row: string;
}

const COLUMNS = 12;
const ROWS = 24;
const INITIAL: GridCell = { col: '01', row: '01' };

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

export function usePointerGrid(): GridCell {
  const [cell, setCell] = useState<GridCell>(INITIAL);
  const frame = useRef<number | null>(null);
  const latest = useRef({ x: 0, y: 0 });
  const lastCell = useRef(INITIAL);

  useEffect(() => {
    // Coarse pointers have no cursor to follow and no hover state.
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const root = document.documentElement;

    const flush = () => {
      frame.current = null;
      const { x, y } = latest.current;

      root.style.setProperty('--pointer-x', `${x}px`);
      root.style.setProperty('--pointer-y', `${y}px`);

      const col = pad(
        Math.min(COLUMNS, Math.max(1, Math.ceil((x / window.innerWidth) * COLUMNS))),
      );
      const row = pad(
        Math.min(ROWS, Math.max(1, Math.ceil((y / window.innerHeight) * ROWS))),
      );

      if (col !== lastCell.current.col || row !== lastCell.current.row) {
        lastCell.current = { col, row };
        setCell({ col, row });
      }
    };

    const onMove = (event: PointerEvent) => {
      latest.current = { x: event.clientX, y: event.clientY };
      frame.current ??= window.requestAnimationFrame(flush);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return cell;
}
