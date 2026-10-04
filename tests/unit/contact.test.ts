import { describe, expect, it, vi } from 'vitest';
import { submitEnquiry, validate } from '@/lib/contact';
import { contactFormEndpoint } from '@/lib/site';

/**
 * Contact form. These guard the failures that lose enquiries silently:
 * reporting success when Formspree did not accept the message, posting to
 * the wrong place, and sending fields Formspree will not treat correctly.
 */

const valid = { name: 'Ada', email: 'ada@example.com', message: 'A pack range.' };

const respond = (status: number, body: unknown) =>
  vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status }));

describe('contact form endpoint', () => {
  it('is the Formspree form supplied for this site', () => {
    expect(contactFormEndpoint).toBe('https://formspree.io/f/xbglnnrj');
  });
});

describe('validate', () => {
  it('accepts a complete enquiry', () => {
    expect(validate(valid)).toEqual({});
  });

  it('asks for every field, with a message per field', () => {
    const errors = validate({ name: ' ', email: '', message: '' });
    expect(Object.keys(errors).sort()).toEqual(['email', 'message', 'name']);
  });

  it('catches an obviously incomplete email address', () => {
    expect(validate({ ...valid, email: 'ada@example' }).email).toBeTruthy();
  });
});

describe('submitEnquiry', () => {
  it('reports success only when Formspree accepts', async () => {
    const fetchImpl = respond(200, { ok: true, next: '/thanks' });
    expect(await submitEnquiry(contactFormEndpoint, valid, { fetchImpl })).toEqual({ ok: true });
  });

  it('posts JSON-accepting multipart to the endpoint with Formspree’s field names', async () => {
    const fetchImpl = respond(200, { ok: true });
    await submitEnquiry(contactFormEndpoint, valid, { fetchImpl, honeypot: '' });

    const [url, init] = fetchImpl.mock.calls[0]! as [string, RequestInit];
    expect(url).toBe('https://formspree.io/f/xbglnnrj');
    expect(init.method).toBe('POST');
    expect(init.headers).toEqual({ Accept: 'application/json' });

    const body = init.body as FormData;
    expect(body.get('name')).toBe('Ada');
    // `email` is what Formspree uses as the notification's Reply-To.
    expect(body.get('email')).toBe('ada@example.com');
    expect(body.get('message')).toBe('A pack range.');
    expect(body.get('_subject')).toBe('Portfolio enquiry from Ada');
    expect(body.get('_gotcha')).toBe('');
    // Budget was removed from the form; nothing else should ride along.
    expect([...body.keys()].sort()).toEqual(['_gotcha', '_subject', 'email', 'message', 'name']);
  });

  it('never reports success when Formspree rejects the submission', async () => {
    const fetchImpl = respond(422, { errors: [{ field: 'email', message: 'should be an email' }] });
    const result = await submitEnquiry(contactFormEndpoint, valid, { fetchImpl });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fields.email).toBe('should be an email');
      expect(result.message).toMatch(/wasn’t sent/);
    }
  });

  it('treats a 200 that says ok:false as a failure', async () => {
    const fetchImpl = respond(200, { ok: false, errors: [{ message: 'Form not active' }] });
    const result = await submitEnquiry(contactFormEndpoint, valid, { fetchImpl });
    expect(result).toMatchObject({ ok: false, message: 'Your message wasn’t sent. Form not active' });
  });

  it('explains a rate limit or used-up allowance plainly', async () => {
    const fetchImpl = respond(429, {});
    const result = await submitEnquiry(contactFormEndpoint, valid, { fetchImpl });
    expect(result).toMatchObject({ ok: false });
    if (!result.ok) expect(result.message).toMatch(/too many messages/);
  });

  it('reports a network failure instead of throwing', async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new TypeError('Failed to fetch'));
    const result = await submitEnquiry(contactFormEndpoint, valid, { fetchImpl });
    expect(result).toMatchObject({ ok: false });
    if (!result.ok) expect(result.message).toMatch(/connection failed/);
  });

  it('survives a non-JSON error page', async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response('<html>502</html>', { status: 502 }));
    const result = await submitEnquiry(contactFormEndpoint, valid, { fetchImpl });
    expect(result.ok).toBe(false);
  });
});
