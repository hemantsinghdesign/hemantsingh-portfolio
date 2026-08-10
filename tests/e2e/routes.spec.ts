import { expect, test } from '@playwright/test';
import { getNextProject } from '@/lib/content/projects';

/**
 * Route coverage. Every route must return 200, expose exactly one <h1>,
 * carry a canonical URL, and be reachable by keyboard.
 */

const ROUTES = [
  '/',
  '/work',
  '/about',
  '/capabilities',
  '/journal',
  '/contact',
  '/resume',
  '/projects/sora-matcha',
  '/projects/hsbc-onboarding',
  '/projects/tadka-trail',
  '/projects/tadka-trail/research',
] as const;

for (const route of ROUTES) {
  test(`${route} renders with one h1 and a canonical url`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    await expect(page.locator('h1')).toHaveCount(1);

    // Next normalises the site root to an origin with no trailing slash, so
    // '/' is asserted against the origin itself rather than a path suffix.
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      'href',
      route === '/' ? /^https?:\/\/[^/]+\/?$/ : new RegExp(`${route}$`),
    );
  });
}

test('an unknown route returns the 404 page', async ({ page }) => {
  const response = await page.goto('/projects/does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByText('Error 404')).toBeVisible();
});

test('the skip link moves focus to the main landmark', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');

  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();

  // Following the link must land focus in <main>, not merely scroll to it —
  // that is the whole point of the skip link for a keyboard user.
  await skip.press('Enter');
  await expect(page.locator('main#main')).toBeFocused();
});

test('a deep link to a case study works without visiting the index first', async ({
  page,
}) => {
  await page.goto('/projects/sora-matcha');
  await expect(page.getByRole('heading', { level: 1, name: 'SORA' })).toBeVisible();
});

test('the HSBC case study deep-links correctly and wraps to the next project', async ({
  page,
}) => {
  await page.goto('/projects/hsbc-onboarding');
  await expect(page.getByRole('heading', { level: 1, name: 'HSBC' })).toBeVisible();

  // Derived from the registry rather than hard-coded: adding a project
  // reorders the wrap, and this assertion must follow it rather than break.
  const next = getNextProject('hsbc-onboarding');
  expect(next).toBeDefined();
  await expect(
    page.locator(`a[href="/projects/${next!.slug}"]`).last(),
  ).toBeVisible();
});

test('the back button returns to the previous route', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Work', exact: true }).first().click();
  await expect(page).toHaveURL(/\/work$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
});

test('going back mid-transition does not get overridden by the queued route', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Work', exact: true }).first().click();
  await expect(page).toHaveURL(/\/work$/);

  // A case-study link plays the cover half before pushing the route. Leaving
  // during that window must abandon the push, not merely outrun it.
  await page.locator('a[href="/projects/sora-matcha"]').first().click();
  await page.goBack();

  // Comfortably past the cover delay, so a surviving timer would have fired.
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL(/\/$/);
});
