/**
 * Contact form submission, kept apart from the component so the one rule
 * that matters can be tested on its own: the form reports success only when
 * Formspree has accepted the submission, and never otherwise.
 *
 * Formspree, Free plan (50 submissions a month, checked October 2026).
 * The endpoint is public by design — it identifies the form, it is not a
 * credential — so it lives in lib/site.ts with the rest of the public
 * configuration. There are no API keys anywhere in this flow.
 *
 * What "accepted" does and does not mean: Formspree answering 200 with
 * `{ ok: true }` means it took the submission. It does not prove the
 * notification email reached an inbox — that depends on the account's email
 * being verified, the form being active, the monthly allowance not being
 * used up, and the inbox's own filtering. The success message is worded to
 * match: it says the message was sent, and offers the direct email address
 * in case no reply arrives.
 */

export interface Enquiry {
  name: string;
  email: string;
  message: string;
}

export type FieldName = keyof Enquiry;

export type SubmitResult =
  | { ok: true }
  | { ok: false; message: string; fields: Partial<Record<FieldName, string>> };

const FIELDS: FieldName[] = ['name', 'email', 'message'];

/** A deliberately loose check: something@something.something. The real
 *  validation is the reply — this only catches obvious typos before sending. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(values: Enquiry): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (!values.name.trim()) errors.name = 'Please add your name.';
  if (!values.email.trim()) errors.email = 'Please add an email address so I can reply.';
  else if (!EMAIL.test(values.email.trim())) errors.email = 'That email address doesn’t look complete.';
  if (!values.message.trim()) errors.message = 'Please say a little about the project or role.';
  return errors;
}

/**
 * Posts the enquiry to Formspree's documented AJAX endpoint.
 * `Accept: application/json` is what makes Formspree answer with JSON
 * instead of redirecting to its own thank-you page.
 *
 * `fetchImpl` exists for tests; the component passes nothing and gets the
 * global fetch.
 */
export async function submitEnquiry(
  endpoint: string,
  values: Enquiry,
  options: { honeypot?: string; fetchImpl?: typeof fetch } = {},
): Promise<SubmitResult> {
  const { honeypot = '', fetchImpl = fetch } = options;

  const body = new FormData();
  body.append('name', values.name.trim());
  // Formspree uses a field named `email` as the Reply-To of the notification,
  // so replying from the inbox goes straight to the enquirer.
  body.append('email', values.email.trim());
  body.append('message', values.message.trim());
  body.append('_subject', `Portfolio enquiry from ${values.name.trim()}`);
  // Formspree's built-in honeypot. A real visitor never sees it; anything in
  // it marks the submission as spam on Formspree's side.
  body.append('_gotcha', honeypot);

  let response: Response;
  try {
    response = await fetchImpl(endpoint, {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
    });
  } catch {
    return {
      ok: false,
      message: 'Your message wasn’t sent: the connection failed. Please check you’re online and try again.',
      fields: {},
    };
  }

  const data: { ok?: boolean; errors?: { field?: string; message?: string; code?: string }[] } =
    await response.json().catch(() => ({}));

  if (response.ok && data.ok !== false) return { ok: true };

  // Formspree reports problems as an `errors` array, sometimes tied to a field.
  const fields: Partial<Record<FieldName, string>> = {};
  const general: string[] = [];
  for (const error of data.errors ?? []) {
    const field = FIELDS.find((name) => name === error.field);
    if (field && error.message) fields[field] = error.message;
    else if (error.message) general.push(error.message);
  }

  const reason =
    general[0] ??
    (response.status === 429
      ? 'The form has had too many messages recently.'
      : Object.keys(fields).length
        ? 'Please check the highlighted fields.'
        : 'The form service didn’t accept it.');

  return { ok: false, message: `Your message wasn’t sent. ${reason}`, fields };
}
