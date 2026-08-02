'use client';

import { createContext, useContext } from 'react';
import { usePointerGrid, type GridCell } from '@/hooks/usePointerGrid';

/**
 * Purpose: shares one pointer listener between the Cursor and the SpecBar so
 *   the coordinate readout is computed once, not twice.
 * Props: `children` — the subtree that needs pointer coordinates.
 * Used in: SiteChrome, wrapping Cursor and SpecBar only.
 * Reusable: yes, but mount it once. It should stay as low in the tree as
 *   possible so cell changes never re-render page content.
 */

const PointerContext = createContext<GridCell>({ col: '01', row: '01' });

export function PointerProvider({ children }: { children: React.ReactNode }) {
  const cell = usePointerGrid();
  return <PointerContext.Provider value={cell}>{children}</PointerContext.Provider>;
}

export function useGridCell(): GridCell {
  return useContext(PointerContext);
}
