# Routing and motion

## Routes

| Route | Rendering | Notes |
|---|---|---|
| `/` | Static | Home |
| `/work` | Static | Project index |
| `/projects/[slug]` | SSG | One per published project |
| `/about` | Static | |
| `/capabilities` | Static | |
| `/journal` | Static | Empty state until the first post |
| `/contact` | Static | |
| `/resume` | Static | |
| `not-found` | Static | Rendered inside the site chrome |

Every route is prerendered at build time. There is no runtime data fetching,
so a crawler and a visitor receive identical, complete HTML.

`dynamicParams = false` on the project route means an unknown slug returns a
real 404 instead of being rendered on demand.

## The poster wipe

`PageTransition` sequences a vermilion sheet across the viewport during a
route change. Three constraints shaped the implementation.

**Navigation is never blocked.** Links are real `next/link` anchors, so the
href is in the HTML and every native affordance works. `TransitionLink` only
intercepts a plain primary click. It leaves alone:

- modifier clicks (cmd, ctrl, shift, alt) — open in a new tab or window
- middle clicks and any non-primary button
- right clicks and the context menu
- links with a `target`
- external and non-path hrefs

Back, forward and deep links are never intercepted at all — they cannot be.
Those produce a pathname change, which triggers the reveal half only, so the
transition still reads as intentional rather than missing.

**Rapid navigation stays responsive.** A click while a transition is already
running aborts the animation and routes immediately. The cover half is 460ms
and only ever runs once.

**Reduced motion disables it entirely.** `useReducedMotion` subscribes to the
media query with `useSyncExternalStore`. When it reports true, `navigate`
returns false and `TransitionLink` does not prevent the default — navigation
is plain and instant. The server snapshot is `true`, so the first paint never
commits to an animation the visitor did not ask for.

## Bundle isolation

Framer Motion is imported in exactly one file, `TransitionOverlay.tsx`, which
is loaded via `next/dynamic({ ssr: false })`. It compiles to its own ~108KB
chunk that is not referenced by the initial HTML, so it is fetched only when a
transition first runs.

Scroll reveals deliberately do **not** use Framer. `useReveal` is an
IntersectionObserver plus a CSS transition — zero bundle cost, and it runs on
the compositor. Adding a JS animation library to do what two CSS properties
already do would be a regression.

## State discipline

Two React anti-patterns were caught by the linter during this phase and both
were fixed rather than suppressed:

- The header used to close its menu with `setState` inside an effect. It now
  stores the route it was opened on, so navigation closes it during render.
- The transition used to set its phase in an effect on pathname change. It now
  derives that during render, and reads reduced motion through
  `useSyncExternalStore`.

Both changes remove a render pass and a class of cascading-update bug.
