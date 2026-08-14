'use client';

/**
 * Purpose: the keyboard user's way past the fixed header, straight to the
 *   page content.
 * Props: none.
 * Used in: the root layout, as the first focusable element in the document.
 * Reusable: no — one per document.
 *
 * It is a real anchor to `#main`, so it works with JavaScript disabled and
 * keeps the native affordances of a link. The click handler exists because
 * following a fragment link does not move focus consistently: Chrome and
 * Firefox set the focus on a `tabindex="-1"` target, WebKit scrolls to it
 * and leaves focus in the header, which puts a Safari user back at the top
 * of the navigation on the next Tab — the exact thing a skip link exists to
 * prevent. Focusing the target explicitly makes every browser agree.
 */
export function SkipLink() {
  return (
    <a
      className="skip-link"
      href="#main"
      onClick={() => {
        document.getElementById('main')?.focus();
      }}
    >
      Skip to content
    </a>
  );
}
