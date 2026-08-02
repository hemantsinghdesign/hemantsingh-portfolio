import { Reveal } from '@/components/ui/Reveal';
import styles from './Section.module.css';

/**
 * Purpose: the standard content section — top rule, vertical rhythm, and a
 *   scroll-entry reveal.
 * Props: `children`; `variant` ('default' | 'tight' | 'flush'); `reveal` to
 *   opt out of the entry animation.
 * Used in: every route.
 * Reusable: yes — the site's only section wrapper.
 */
export function Section({
  children,
  variant = 'default',
  reveal = true,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'tight' | 'flush';
  reveal?: boolean;
}) {
  const className = [
    styles.section,
    variant === 'tight' ? styles.tight : '',
    variant === 'flush' ? styles.flush : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (!reveal) return <section className={className}>{children}</section>;
  return <Reveal className={className}>{children}</Reveal>;
}
