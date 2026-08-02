'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { MenuButton } from '@/components/layout/MenuButton';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { nav, profile } from '@/lib/site';
import styles from './SiteHeader.module.css';

/**
 * Purpose: the sticky header — wordmark, primary nav and mobile trigger.
 * Props: none. Active state is derived from the current pathname.
 * Used in: SiteChrome, on every route.
 * Reusable: no — one per document.
 */
export function SiteHeader() {
  const pathname = usePathname();

  // The menu stores the route it was opened on rather than a boolean.
  // A navigation therefore closes it during render — including via the
  // browser back button — with no effect and no cascading re-render.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const isMenuOpen = openedOn === pathname;

  const closeMenu = useCallback(() => setOpenedOn(null), []);
  const toggleMenu = useCallback(
    () => setOpenedOn((current) => (current === pathname ? null : pathname)),
    [pathname],
  );

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.mark}>
          <span className={styles.glyph} aria-hidden="true" />
          <span className={styles.name}>{profile.name}</span>
          <span className={`${styles.role} mono`}>{profile.role}</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.linkActive : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
