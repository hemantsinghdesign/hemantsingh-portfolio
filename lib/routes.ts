/**
 * Route labels for the spec bar and the transition sheet.
 * Kept apart from `nav` in lib/site because not every route is in the menu
 * (resume, 404 and individual case studies are reachable but unlisted).
 */

const EXACT: Record<string, string> = {
  '/': 'Index',
  '/work': 'Work',
  '/about': 'About',
  '/capabilities': 'Capabilities',
  '/journal': 'Journal',
  '/contact': 'Contact',
  '/resume': 'Resume',
};

export function labelForPath(pathname: string): string {
  const exact = EXACT[pathname];
  if (exact) return exact;
  if (pathname.startsWith('/projects/')) return 'Case';
  if (pathname.startsWith('/journal/')) return 'Journal';
  return 'Lost';
}
