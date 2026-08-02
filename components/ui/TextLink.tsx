import Link from 'next/link';
import styles from './TextLink.module.css';

/**
 * Purpose: the secondary "All work →" style link — underlined, no fill.
 * Props: `href`, `children` label, `flush` to drop the default top margin.
 * Used in: home, work, case studies, contact.
 * Reusable: yes — the site's standard secondary action.
 */
export function TextLink({
  href,
  children,
  flush = false,
}: {
  href: string;
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <Link href={href} className={`${styles.link} ${flush ? styles.flush : ''}`}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
