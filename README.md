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

```bash
git init && git add -A && git commit -m "initial"
gh repo create hemant-portfolio --private --source=. --push
```

Then import the repo at **vercel.com/new**. Set one environment variable:

```
NEXT_PUBLIC_SITE_URL = https://your-domain.com
```

Vercel detects Next.js and deploys with no configuration. You get a live URL
in about two minutes, which also works on your phone.

## Before launch

Two placeholders in `lib/site.ts`:

- `profile.email` — currently `hello@hemantsingh.design`
- `socials` — Instagram and Behance URLs are empty, so those links are hidden
  until you fill them in

## Checks

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run test        # Vitest — content and route contracts
npm run build       # production build
npm run check       # all four
```
