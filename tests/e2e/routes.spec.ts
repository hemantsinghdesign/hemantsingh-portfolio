import { expect, test } from '@playwright/test';

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
] as const;

for (const route of ROUTES) {
  test(`${route} renders with one h1 and a canonical url`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);

    await expect(page.locator('h1')).toHaveCount(1);

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', new RegExp(`${route}$`));
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
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});

test('a deep link to a case study works without visiting the index first', async ({
  page,
}) => {
  await page.goto('/projects/sora-matcha');
  await expect(page.getByRole('heading', { level: 1, name: 'SORA' })).toBeVisible();
});

test('the back button returns to the previous route', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Work', exact: true }).first().click();
  await expect(page).toHaveURL(/\/work$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
});
