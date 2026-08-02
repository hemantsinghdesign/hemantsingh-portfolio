import Link from 'next/link';
import { nav, profile, socials } from '@/lib/site';
import styles from './SiteFooter.module.css';

/**
 * Purpose: the site footer — identity, full page list, external links and
 *   the colophon.
 * Props: none. Reads everything from lib/site.
 * Used in: SiteChrome, on every route.
 * Reusable: no — one per document.
 *
 * Server component. The full page list here is deliberate internal linking:
 * it gives every route an inbound link from every other route, which is what
 * lets a crawler reach the whole site from any entry point.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((social) => social.url.length > 0);

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <span className={`${styles.key} mono`}>Designer</span>
          <p className={styles.name}>{profile.name}</p>
          <p className={`${styles.sub} mono`}>{profile.role}</p>
        </div>

        <div className={styles.column}>
          <span className={`${styles.key} mono`}>Pages</span>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <span className={`${styles.key} mono`}>Elsewhere</span>
          <a className={styles.link} href={`mailto:${profile.email}`}>
            Email
          </a>
          {activeSocials.map((social) => (
            <a
              key={social.label}
              className={styles.link}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className={styles.column}>
          <span className={`${styles.key} mono`}>Colophon</span>
          <p className={`${styles.sub} mono`}>
            Set in Helvetica Neue on a twelve-column grid. Four inks. Built to be
            edited.
          </p>
        </div>
      </div>

      <div className={styles.rule} />

      <div className={`${styles.base} mono`}>
        <span>
          © {year} {profile.name}
        </span>
        <span>All work shown by the designer</span>
      </div>
    </footer>
  );
}
