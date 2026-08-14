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

test('the skip link moves focus to the main landmark', async ({
  page,
  browserName,
}) => {
  await page.goto('/');

  const skip = page.getByRole('link', { name: 'Skip to content' });

  // WebKit only tabs to links when full keyboard access is on, which is off
  // by default and not settable from here. The tab order is asserted where it
  // is meaningful; what the skip link actually does is asserted everywhere.
  if (browserName === 'webkit') {
    await skip.focus();
  } else {
    await page.keyboard.press('Tab');
  }

  await expect(skip).toBeFocused();

  // Activated with a click rather than Enter: mobile WebKit has no keyboard
  // model for link activation, so Enter does nothing there. The link is
  // off-screen until focused, and `.skip-link:focus` brings it into view,
  // so focusing first is what makes the click possible at all.
  await skip.click();

  // Following it must land focus in <main>, not merely scroll to it — that is
  // the whole point of the skip link for a keyboard user.
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
  // Driven through a project row rather than the header: below 760px the
  // primary nav is hidden behind the menu, and what is under test here is
  // client-side navigation and history, not the header.
  await page.goto('/');
  await page.goto('/work');

  await page.locator('a[href="/projects/sora-matcha"]').first().click();
  await expect(page).toHaveURL(/\/projects\/sora-matcha$/);

  await page.goBack();
  await expect(page).toHaveURL(/\/work$/);
});

test('going back mid-transition does not get overridden by the queued route', async ({
  page,
}) => {
  await page.goto('/');
  await page.goto('/work');

  // A case-study link plays the cover half before pushing the route. Leaving
  // during that window must abandon the push, not merely outrun it.
  await page.locator('a[href="/projects/sora-matcha"]').first().click();
  await page.goBack();

  // The click is intercepted before it pushes, so back leaves /work for the
  // entry before it. A surviving timer would land us on the case study
  // instead; this waits comfortably past the cover delay to catch that.
  await page.waitForTimeout(1500);
  await expect(page).toHaveURL(/\/$/);
});
