import { z } from 'zod';
import { profile } from '@/lib/site';

/**
 * Contact endpoint.
 *
 * The form posts here and this sends the email, so the API key stays on the
 * server and never reaches the browser. Resend's REST API is one POST, so
 * there is no SDK to add — this project has five dependencies and does not
 * need a sixth for one fetch.
 *
 * Configure in Vercel → Settings → Environment Variables:
 *
 *   RESEND_API_KEY   required. Without it this returns 503 and the form
 *                    falls back to opening the visitor's mail app.
 *   CONTACT_TO       optional. Defaults to the address in lib/site.
 *   CONTACT_FROM     optional. Defaults to Resend's shared sending address,
 *                    which works immediately; swap it for an address on a
 *                    verified domain when there is one.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_FROM = 'Portfolio <onboarding@resend.dev>';

const payloadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  budget: z.string().trim().max(200).optional().default(''),
  note: z.string().trim().max(5000).optional().default(''),
  /** Honeypot. Real people never see this field, so anything in it is a bot. */
  company: z.string().max(0).optional().default(''),
});

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = payloadSchema.safeParse(await request.json());
  } catch {
    return json({ error: 'Could not read that request.' }, 400);
  }

  if (!parsed.success) {
    // A filled honeypot is a bot, and a bot should not learn that it failed.
    return json({ error: 'Please check the form and try again.' }, 400);
  }

  const { name, email, budget, note } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return json(
      { error: 'The form is not configured to send yet.', fallback: true },
      503,
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Budget: ${budget || '—'}`,
    '',
    note || '(no message)',
  ].join('\n');

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? DEFAULT_FROM,
        to: [process.env.CONTACT_TO ?? profile.email],
        // So replying in the mail client goes to the enquirer, not to Resend.
        reply_to: email,
        subject: `New project — ${name}`,
        text: lines,
      }),
    });

    if (!response.ok) {
      // Logged for the platform's runtime logs; the visitor gets a plain
      // message and the option to email directly.
      console.error('Resend rejected the message', response.status, await response.text());
      return json({ error: 'The message could not be sent.', fallback: true }, 502);
    }
  } catch (error) {
    console.error('Could not reach Resend', error);
    return json({ error: 'The message could not be sent.', fallback: true }, 502);
  }

  return json({ ok: true }, 200);
}
