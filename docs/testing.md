# Testing

Two runners, kept strictly separate so neither picks up the other's specs.

| Layer | Tool | Location | Command |
|---|---|---|---|
| Unit / content | Vitest | `tests/unit/**/*.test.ts` | `npm run test` |
| End-to-end | Playwright | `tests/e2e/**/*.spec.ts` | `npm run test:e2e` |

Both are installed and configured. Nothing needs restructuring to add coverage.

## Unit tests

`vitest.config.ts` runs in a `node` environment and resolves the `@/` alias,
so anything under `lib/` or `content/` can be imported exactly as the app does.

`tests/unit/content.test.ts` guards the invariants that routing, the sitemap
and structured data depend on: unique slugs, resolvable lookups, and every
image carrying an explicit `width`/`height` and root-relative `src`.

Coverage: `npx vitest run --coverage` (v8, scoped to `lib/` and `content/`).

## End-to-end tests

`playwright.config.ts` builds and serves the production bundle before running,
so what is tested is what ships. Two projects: Desktop Chrome and iPhone 13.

First run only:

```bash
npx playwright install
```

## Conventions

- Query by role and accessible name (`getByRole`), not by CSS class. Class
  names are styling details; roles are the contract with assistive tech, so
  role-based selectors double as accessibility assertions.
- Add `data-testid` only when no accessible query works.
- Test behaviour and content contracts, not visual output — the design is
  verified by eye, not by snapshot.

## What to add next

- Route smoke tests once Phase 3 lands (every route returns 200, has one `h1`).
- A metadata test per route once Phase 6 lands (title, canonical, OG tags).
- Keyboard traversal and focus-trap tests once Phase 7 lands.
