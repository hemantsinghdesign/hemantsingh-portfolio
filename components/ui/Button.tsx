import Link from 'next/link';
import styles from './Button.module.css';

/**
 * Purpose: the primary call to action — solid ink block with a signal fill
 *   that wipes up on hover.
 * Props: `children` label; `size` ('default' | 'large'); plus either `href`
 *   (renders a Link) or `onClick`/`disabled`/`type` (renders a button).
 * Used in: home, work, capabilities, about, contact, 404.
 * Reusable: yes — this is the site's only button style.
 *
 * Rendering a Link when `href` is present keeps navigation as a real anchor,
 * so middle-click, open-in-new-tab and prefetch all keep working.
 *
 * `type` defaults to 'button' so a stray button inside a form cannot submit
 * it by accident; the one that is meant to submit says so.
 */

interface CommonProps {
  children: React.ReactNode;
  size?: 'default' | 'large';
}

type ButtonProps = CommonProps &
  (
    | { href: string; onClick?: never; disabled?: never; type?: never }
    | {
        href?: never;
        onClick?: () => void;
        disabled?: boolean;
        type?: 'button' | 'submit';
      }
  );

export function Button({ children, size = 'default', ...rest }: ButtonProps) {
  const className = `${styles.button} ${size === 'large' ? styles.large : ''}`;

  const inner = (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={rest.type ?? 'button'}
      className={className}
      onClick={rest.onClick}
      disabled={rest.disabled}
    >
      {inner}
    </button>
  );
}
