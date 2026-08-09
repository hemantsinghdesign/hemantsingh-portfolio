import { Cursor } from '@/components/layout/Cursor';
import { GridOverlay } from '@/components/layout/GridOverlay';
import { PointerProvider } from '@/components/layout/PointerProvider';
import { RegistrationMarks } from '@/components/layout/RegistrationMarks';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SpecBar } from '@/components/layout/SpecBar';
import styles from './SiteChrome.module.css';

/**
 * Purpose: the persistent frame around every route — grid, crop marks,
 *   header, footer, cursor and spec bar.
 * Props: `children` — the route's content.
 * Used in: the root layout, wrapping all routes.
 * Reusable: no — one per document, by definition.
 *
 * Server component. Only the four pieces that genuinely need the browser
 * (header menu, cursor, spec bar) are client components, so the page HTML
 * a crawler receives is complete.
 *
 * PointerProvider deliberately wraps only Cursor and SpecBar: a pointer move
 * that crosses a grid line then re-renders two tiny leaves, never the page.
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

      <PointerProvider>
        <Cursor />
        <SpecBar />
      </PointerProvider>
    </div>
  );
}
