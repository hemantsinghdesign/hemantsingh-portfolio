'use client';

import { usePathname } from 'next/navigation';
import { useGridCell } from '@/components/layout/PointerProvider';
import { labelForPath } from '@/lib/routes';
import { useClock } from '@/hooks/useClock';
import styles from './SpecBar.module.css';

/**
 * Purpose: the fixed bottom strip showing the current page, the pointer's
 *   grid cell and a running clock — the print-shop spec line.
 * Props: none — the page name is derived from the current route.
 * Used in: SiteChrome, inside PointerProvider.
 * Reusable: no — one per document.
 *
 * Decorative, so hidden from assistive tech: the page name is already
 * announced by the route announcer and the <h1>.
 */
export function SpecBar() {
  const pathname = usePathname();
  const { col, row } = useGridCell();
  const time = useClock();
  const label = labelForPath(pathname);

  return (
    <div className={`${styles.bar} mono`} aria-hidden="true">
      <span>{label}</span>
      <span className={styles.coords}>
        C{col} / R{row}
      </span>
      <span className={styles.clock}>{time}</span>
    </div>
  );
}
