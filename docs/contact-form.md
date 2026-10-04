# Contact form

The form on `/contact` sends enquiries to **Formspree**, on the **Free plan**,
straight from the browser. There is no server route, no API key and no
environment variable to set.

| | |
|---|---|
| Endpoint | `https://formspree.io/f/xbglnnrj`, in `lib/site.ts` as `contactFormEndpoint` |
| Fields | `name`, `email`, `message` |
| Extra fields | `_subject` (the notification's subject line) and `_gotcha` (honeypot) |
| Submission logic | `lib/contact.ts` |
| Form component | `components/contact/ContactForm.tsx` |
| Tests | `tests/unit/contact.test.ts` |

The endpoint is public by design. It names the form; it is not a secret, and
it has to reach the browser for the form to work.

## Free plan limits

Checked October 2026: **50 submissions a month** on Free, with Formspree's
basic spam filtering. Nothing here uses a paid feature. Check the current
figure at [formspree.io/plans](https://formspree.io/plans); if submissions
start being refused, the allowance is the first thing to look at.

## How a submission behaves

- **Sending:** the button locks and a second press does nothing, so a
  double-click cannot send twice.
- **Accepted:** shown only when Formspree answers `200` with `{ ok: true }`.
- **Refused or failed:** the message says it was not sent, every field keeps
  what was typed, and the direct email address is offered.
- **No JavaScript:** the form's `action` is the endpoint, so it still posts
  and Formspree shows its own confirmation page.

Replying to a notification goes to the enquirer: Formspree uses the field
named `email` as the Reply-To.

## What "accepted" does not prove

Formspree accepting a submission does not prove the notification reached the
inbox. That also depends on:

1. the Formspree account's email address being verified,
2. the form being active and pointed at the right recipient,
3. the monthly allowance not being used up,
4. the inbox not filtering the notification.

So the only real test is end to end: send a clearly labelled test enquiry
from the live preview and confirm it arrives at `hemantsinghuk2024@gmail.com`
(check spam too). Do this after any change to the form or the Formspree
account.

## Spam

Two layers, both on the Free plan:

- Formspree's own spam filtering, applied to every submission.
- The `_gotcha` honeypot: positioned off-screen, out of the tab order and out
  of the accessibility tree. Anything that fills it is treated as spam by
  Formspree.

## Content Security Policy

`next.config.mjs` allows `https://formspree.io` in `connect-src` (the
JavaScript submission) and in `form-action` (the no-JavaScript fallback). If
the form ever reports a connection failure on every attempt, check that
these are still there.
