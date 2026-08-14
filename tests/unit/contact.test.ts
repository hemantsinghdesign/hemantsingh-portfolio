import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { POST } from '@/app/api/contact/route';

/**
 * Contact endpoint. These guard the two things that lose enquiries silently:
 * accepting a message and then not sending it, and reporting success when
 * the send failed.
 */

function post(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const valid = {
  name: 'Ada',
  email: 'ada@example.com',
  budget: '£2k',
  note: 'A pack range.',
};

describe('contact endpoint', () => {
  beforeEach(() => {
    vi.stubEnv('RESEND_API_KEY', 'test-key');
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('sends a valid enquiry and reports success', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response('{}', { status: 200 }));

    const response = await POST(post(valid));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });

    const [, init] = fetchMock.mock.calls[0]!;
    const sent = JSON.parse(String(init?.body));
    // Replying in the mail client must reach the enquirer, not the provider.
    expect(sent.reply_to).toBe('ada@example.com');
    expect(sent.text).toContain('A pack range.');
  });

  it('rejects a missing email without sending anything', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await POST(post({ ...valid, email: '' }));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('drops a submission with the honeypot filled', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await POST(post({ ...valid, company: 'a bot' }));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('never claims success when the provider rejects the message', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response('nope', { status: 422 }),
    );

    const response = await POST(post(valid));
    expect(response.status).toBe(502);
    const body = await response.json();
    expect(body.ok).toBeUndefined();
    // The form offers the mail-app route only when told it may.
    expect(body.fallback).toBe(true);
  });

  it('asks the form to fall back when no key is configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const response = await POST(post(valid));
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({ fallback: true });
  });
});
