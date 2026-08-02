# Design system

The visual language is fixed. This document describes where each part of it
lives so it can be maintained without being redesigned.

## Layers

`styles/globals.css` declares the cascade order once:

```css
@layer reset, base, components, utilities;
```

A CSS Module always wins over a base rule regardless of selector specificity.
This is deliberate: in the prototype, `.site button { padding: 0 }` silently
cancelled `.btn { padding: 14px 20px }` because it was one point more
specific. Layers make that class of bug impossible.

## Where styles live

| File | Holds |
|---|---|
| `styles/tokens.css` | Every colour, font stack, spacing and motion value |
| `styles/globals.css` | Reset, base element styles, skip link |
| `styles/typography.css` | Display scale, `.lede`, `.mono`, `.eyebrow`, line reveal |
| `components/**/*.module.css` | Everything else, scoped to one component |

Type classes are global because they are the site's voice, used on every
route. Scoping them per module would mean duplicating the scale.

## Module size

Keep a CSS Module under ~250 lines. Past that, split by responsibility rather
than growing one sheet — the header is a worked example: `SiteHeader.module.css`
(bar, wordmark, nav), `MenuButton.module.css` (trigger), and
`MobileMenu.module.css` (panel), rather than one 200-line header sheet.

## Tokens

Colour, type and layout tokens are ported 1:1 from the approved design. Two
additions:

- **`--mute-sm`** (`#6B6B63`). The original `--mute` scores 3.79:1 on paper,
  which fails WCAG AA for text under 24px. `--mute-sm` scores 4.57:1 and is
  used for body copy, captions and labels. The difference is invisible at a
  glance; the compliance difference is not.
- **`--signal-sm`** (`#C1361A`) and **`--signal-on-dark`** (`#E8401F`). The
  brand red scores 3.58:1 on paper and 4.40:1 on the dark band — both fail AA
  for text under 24px. These two variants score 4.69:1 and 4.56:1 and are used
  for the 11-13px mono labels and hover states only. Display type, rules,
  borders and fills keep the full-strength `--signal`.
- **Motion duration tokens** (`--dur-wipe`, `--dur-reveal`, `--dur-hover`).
  `prefers-reduced-motion` collapses them to `1ms` in one place, so reduced
  motion no longer has to be handled component by component.

## Motion

Only `transform` and `opacity` are animated, so everything stays on the
compositor. The pointer position is written to `--pointer-x` / `--pointer-y`
as CSS custom properties inside a `requestAnimationFrame` — React never
re-renders on mouse move.

## Component conventions

Every reusable component carries a header comment stating its purpose, props,
where it is used, and whether it is meant to stay reusable. Components are
server components unless they need browser APIs; `'use client'` appears in
five files only: the header, menu, cursor, spec bar and reveal wrapper.


## Contrast rules to keep

Verified with axe-core (the engine Lighthouse uses) across all eight routes:
**0 WCAG 2.1 AA violations**.

Two habits keep it that way:

- **Never de-emphasise readable text with `opacity`.** It multiplies against
  the background — the "In progress" row was set to `opacity: 0.55` and its
  labels measured 2.08:1. Use an explicit muted colour instead.
- **Pick the signal variant by text size and surface.** Under 24px on paper
  use `--signal-sm`; under 24px on the dark band use `--signal-on-dark`;
  anything larger, or any rule or fill, uses `--signal`.
