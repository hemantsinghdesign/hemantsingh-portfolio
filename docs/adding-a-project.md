# Adding a project

Two steps. No component or route files are touched.

## 1. Add the images

```
public/projects/<slug>/
  hero.jpg
  ...
```

Use descriptive filenames (`tin-green-foil.jpg`), never numbers. Source files
should be JPEG or PNG at up to ~1800px on the long edge — `next/image`
generates AVIF and WebP variants at every breakpoint automatically, so do not
pre-optimise or pre-convert.

Note each file's pixel dimensions; they are required in step 2.

## 2. Add the content file

Copy `content/projects/sora-matcha.ts` to `content/projects/<slug>.ts` and
edit it. Then register it in `lib/content/projects.ts`:

```ts
import { yourProject } from '@/content/projects/your-project';

const sources = [soraMatcha, yourProject];
```

That is the whole process. The route, listing, sitemap entry, structured data
and Open Graph tags all derive from the content file.

## Available blocks

`blocks` is an ordered list. Each entry is one layout:

| Type | Renders |
|---|---|
| `bleed` | Edge-to-edge image, optional overlaid caption |
| `heading` | Lettered section rule (`marker`, `title`, `note`) |
| `note` | Short pull-quote with a signal-coloured rule |
| `prose` | Normal-width paragraphs; `variant: 'reflection'` for the closing word |
| `full` | Single wide image with a caption |
| `pair` | Two images side by side |
| `triptych` | Three images side by side |
| `mosaic` | Three to six images composed as one block (see below) |
| `gallery` | Dark full-bleed band with a horizontal scroll row |
| `story` | One story card on its own ground colour, bilingual |
| `timeline` | Stepped journey with an emotional-temperature line |
| `compare` | Two-panel research beat — a list against a finding |
| `columns` | Two to four titled principles, on the site's ColumnGrid |
| `interlude` | Full-screen editorial statement. At most twice per case study |
| `annotate` | Sticky illustration that annotates itself as the text scrolls |
| `visualLanguage` | Reference board — source image, palette, motifs |

Mix them freely — the order in the array is the order on the page. Vary the
layout deliberately: a case study where every image is the same size reads as
a contact sheet, not an argument.

## When to reach for `mosaic`

Three or more images that say **one** thing. Four reference sheets are one
block, not two `pair`s — splitting them implies a grouping the content does
not have. A shoot is one block, not five `full`s, because five full-width
images make five separate arguments out of one session.

- `layout: 'even'` tiles at natural aspect and **never crops**. For sheets,
  sketches and artwork, where the edge of the page is part of the subject.
- `layout: 'feature'` crops square and gives the first image a double cell.
  For photography, where the crop is a composition. Five images tile a
  four-column grid exactly, with no orphan cell.

Put the image that carries the argument first — in `feature` it gets the
double cell, so the layout should agree with what the writing claims.

## Pacing

The build cannot catch this, so it is worth checking by eye: if a case study
runs more than two or three image blocks with no words between them, the
reader has left the argument and started scrolling a contact sheet. A heading
followed only by pictures is the same failure with a label on it — if a
section is worth naming, it is worth a sentence saying what it shows.

## Rules the build enforces

`content/projects/*.ts` is validated by Zod at build time. `next build` fails,
rather than rendering an empty section, if:

- `slug` is not lowercase and hyphenated
- `index` is not two digits, or `year` is not four
- any image is missing `width`, `height`, or a root-relative `src`
- `approach` or `metrics` is empty

## Unpublishing

Set `published: false`. The project disappears from listings, the sitemap and
its own route without being deleted.

## Adding a journal post

Same shape: create `content/journal/<slug>.ts` and register it in
`lib/content/journal.ts`. The route and listing already exist.

## Moving to a CMS later

The Zod schemas in `lib/content/schema.ts` are the contract. To connect Sanity,
Contentful or Notion, write a mapper that returns the same shape and swap the
body of `lib/content/projects.ts`. No component, route or style changes.
