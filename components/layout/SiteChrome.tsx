import { GridOverlay } from '@/components/layout/GridOverlay';
import { RegistrationMarks } from '@/components/layout/RegistrationMarks';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import styles from './SiteChrome.module.css';

/**
 * Purpose: the persistent frame around every route — grid, crop marks,
 *   header and footer.
 * Props: `children` — the route's content.
 * Used in: the root layout, wrapping all routes.
 * Reusable: no — one per document, by definition.
 *
 * Server component. Only the header's mobile menu needs the browser, so the
 * page HTML a crawler receives is complete.
 *
 * There used to be a custom cursor with a grid-coordinate readout and a
 * fixed bottom bar carrying the route name, the coordinates and a clock.
 * None of it told a visitor anything they needed, it covered the foot of
 * every page, and the clock re-rendered once a second forever. The route
 * name is already the active nav item, so nothing was lost by removing it.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <GridOverlay />
      <RegistrationMarks />
      <SiteHeader />

      {/* tabIndex=-1 makes <main> a valid focus target so the skip link moves
          focus, not just scroll position. Without it Safari and older WebKit
          scroll to the landmark but leave focus in the header. */}
      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
