# Running the portfolio locally

## What you need

Node 20 or newer. Check with `node -v`.

## Three commands

```bash
unzip hemant-portfolio.zip -d portfolio
cd portfolio
npm install
npm run dev
```

Open **http://localhost:3000**

That is the real thing — every route, the poster wipe between pages, the
cursor coordinate readout, hover states and scroll reveals.

## Routes to try

| Path | |
|---|---|
| `/` | Home |
| `/work` | Project index |
| `/projects/sora-matcha` | The SORA case study |
| `/about` `/capabilities` `/journal` `/contact` `/resume` | |
| `/anything-else` | 404 |

## Putting it online

Import the repo at **vercel.com/new**. Vercel detects Next.js and deploys
with no configuration, and you get a live URL in about two minutes.

## Connecting hemantsingh.design

Do these in order. The order matters, and step 3 is the one people skip.

1. **Vercel → Settings → Domains → Add**, and enter `hemantsingh.design`.
   Add `www.hemantsingh.design` too and let Vercel redirect it to the apex.
2. **At the registrar**, point DNS where Vercel tells you to: an `A` record
   for the apex at `76.76.21.21`, and a `CNAME` for `www` at
   `cname.vercel-dns.com`. Vercel shows the exact values and issues the TLS
   certificate once the records resolve. Propagation is usually minutes.
3. **Vercel → Settings → Environment Variables**, set

   ```
   NEXT_PUBLIC_SITE_URL = https://hemantsingh.design
   ```

   for Production, then **redeploy**. Environment variables are read at build
   time, so an existing deployment will not pick this up on its own.

Why step 3 is not optional: this one variable is the source for every
canonical tag, the sitemap, `robots.txt`, the Open Graph image URLs and the
JSON-LD. If it still says `hemantsingh-portfolio.vercel.app` when the custom
domain goes live, every page on the new domain will tell Google that the
real version of itself lives at the `.vercel.app` address. Google indexes
that one instead, and the domain you paid for never ranks. Links shared on
LinkedIn resolve their preview images against the wrong host for the same
reason.

To confirm it worked, after the redeploy:

```bash
curl -s https://hemantsingh.design/robots.txt
# Host: hemantsingh.design
# Sitemap: https://hemantsingh.design/sitemap.xml

curl -s https://hemantsingh.design | grep -o 'rel="canonical" href="[^"]*"'
# rel="canonical" href="https://hemantsingh.design/"
```

If either still shows a `.vercel.app` host, the variable did not take or the
deployment predates it.

## Before launch

- `socials` in `lib/site.ts` — Instagram and Behance URLs are empty, so those
  links stay hidden until they are filled in
- `RESEND_API_KEY` — see `docs/contact-form.md`. Without it the contact form
  falls back to opening the visitor's mail app instead of sending

## Checks

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run test        # Vitest — content and route contracts
npm run build       # production build
npm run check       # all four
```
