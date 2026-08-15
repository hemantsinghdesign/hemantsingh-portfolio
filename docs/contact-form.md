# Contact form

The form on `/contact` posts to `app/api/contact/route.ts`, which sends the
email from the server. The API key therefore never reaches the browser.

## Setting it up

1. Create an account at [resend.com](https://resend.com) and make an API key.
2. In Vercel → your project → **Settings → Environment Variables**, add:

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | the key from step 1 |

   Apply it to Production, Preview and Development.
3. Redeploy. Vercel only picks up new environment variables on a fresh build.

That is the whole setup. Enquiries arrive at the address in `lib/site.ts`,
and replying in your mail client goes to the enquirer rather than to Resend,
because the send sets `reply_to`.

## Optional

| Name | Effect |
|---|---|
| `CONTACT_TO` | Send enquiries somewhere other than the address in `lib/site.ts` |
| `CONTACT_FROM` | The from-address. Defaults to Resend's shared sender, which needs no DNS. Point it at your own domain once that domain is verified in Resend — mail from a verified domain is far less likely to be filtered |

## What happens when it is not configured

Nothing breaks and nothing lies. The endpoint returns 503, the form says it
cannot send, and it offers to open the visitor's mail app with the message
already filled in. The form never reports success for a message that was not
sent — `tests/unit/contact.test.ts` covers that specifically, because it is
the failure that loses work silently.

## Spam

A honeypot field named `company` is positioned off-screen and kept out of the
tab order and the accessibility tree. Anything that fills it is rejected, and
the response does not tell it why.
