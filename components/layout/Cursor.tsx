'use client';

import { useGridCell } from '@/components/layout/PointerProvider';
import styles from './Cursor.module.css';

/**
 * Purpose: the signal-coloured dot that follows the pointer, with a live
 *   grid coordinate readout beside it.
 * Props: none — reads the shared cell from PointerProvider.
 * Used in: SiteChrome, inside PointerProvider.
 * Reusable: no — one per document.
 *
 * Hidden from assistive tech and from touch and reduced-motion users.
 */
export function Cursor() {
  const { col, row } = useGridCell();

  return (
    <div className={styles.cursor} aria-hidden="true">
      <span className={styles.dot} />
      <span className={`${styles.readout} mono`}>
        C{col} / R{row}
      </span>
    </div>
  );
}
