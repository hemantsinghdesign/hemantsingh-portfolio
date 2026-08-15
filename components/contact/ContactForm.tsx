'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/lib/site';
import styles from './ContactForm.module.css';

/**
 * Purpose: the enquiry form on /contact.
 * Props: none.
 * Used in: /contact.
 * Reusable: no — one form, one destination.
 *
 * It posts to /api/contact, which sends the email server-side. That matters:
 * the previous version composed a mailto: link and handed it to the device,
 * so an enquiry only arrived if the visitor had a mail client configured and
 * then pressed send themselves. Most never did, and the form said "Message
 * ready." either way.
 *
 * If the endpoint is unconfigured or the send fails it says so plainly and
 * offers the mail-app route as a fallback rather than pretending. Nothing
 * here ever claims a message was sent when it was not.
 *
 * It is a real <form>: Enter submits from any field, and `required` and
 * `type="email"` give the browser's own validation.
 */

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    budget: '',
    note: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [canFallBack, setCanFallBack] = useState(false);

  const update =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  const canSubmit =
    values.name.trim().length > 0 && values.email.trim().length > 0;

  /** The mail-app route, kept only as a fallback when sending fails. */
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `New project — ${values.name}`,
  )}&body=${encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Budget: ${values.budget || '—'}`,
      '',
      values.note,
    ].join('\n'),
  )}`;

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || status === 'sending') return;

    setStatus('sending');
    setMessage('');
    setCanFallBack(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        setMessage(body.error ?? 'The message could not be sent.');
        setCanFallBack(Boolean(body.fallback));
        return;
      }

      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage('The message could not be sent — you may be offline.');
      setCanFallBack(true);
    }
  };

  if (status === 'sent') {
    return (
      <div className={styles.sent} aria-live="polite">
        <p className={styles.sentTitle}>Message sent.</p>
        <p className={styles.sentBody}>
          It is in my inbox and I reply to everything within two working days.
          If you would rather have a copy, write to{' '}
          <a className={styles.link} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
        <Button
          onClick={() => {
            setValues({ name: '', email: '', budget: '', note: '' });
            setStatus('idle');
          }}
        >
          Write another
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.fields} onSubmit={submit}>
      <label className={styles.field}>
        <span className={`${styles.label} mono`}>Name</span>
        <input
          className={styles.input}
          name="name"
          value={values.name}
          onChange={update('name')}
          placeholder="Who is writing"
          required
          autoComplete="name"
        />
      </label>

      <label className={styles.field}>
        <span className={`${styles.label} mono`}>Email</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={values.email}
          onChange={update('email')}
          placeholder="Where I reply"
          required
          autoComplete="email"
        />
      </label>

      <label className={styles.field}>
        <span className={`${styles.label} mono`}>Budget range</span>
        <input
          className={styles.input}
          name="budget"
          value={values.budget}
          onChange={update('budget')}
          placeholder="Optional, but it speeds things up"
        />
      </label>

      <label className={styles.field}>
        <span className={`${styles.label} mono`}>The project</span>
        <textarea
          className={styles.textarea}
          name="note"
          rows={5}
          value={values.note}
          onChange={update('note')}
          placeholder="What you are making, who it is for, and when you need it"
        />
      </label>

      {/* Honeypot: off-screen and skipped by the keyboard, so only a bot
          fills it. Not `display: none`, which some bots detect. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button type="submit" disabled={!canSubmit || status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>

      {/* Announced rather than only shown, and never silent about a failure. */}
      <p className={styles.status} role="status" aria-live="polite">
        {status === 'error' && (
          <>
            {message}{' '}
            {canFallBack && (
              <a className={styles.link} href={mailtoHref}>
                Open it in your mail app instead
              </a>
            )}
          </>
        )}
      </p>
    </form>
  );
}
