'use client';

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/Button';
import { submitEnquiry, validate, type Enquiry, type FieldName } from '@/lib/contact';
import { contactFormEndpoint, profile } from '@/lib/site';
import styles from './ContactForm.module.css';

/**
 * Purpose: the enquiry form on /contact.
 * Props: none.
 * Used in: /contact.
 * Reusable: no — one form, one destination.
 *
 * Sends to Formspree (Free plan) from the browser. There is no server route
 * and no API key: the previous version posted to /api/contact, which needed
 * a Resend key that was never configured, so every enquiry failed.
 *
 * States: idle → sending → sent, or → error. While sending, the button is
 * locked and a second press does nothing, so an impatient double-click
 * cannot send twice. On error every field keeps what the visitor typed.
 * "Sent" is shown only after Formspree has accepted the submission — see
 * lib/contact.ts for exactly what that does and does not prove.
 *
 * Works without JavaScript too: the form's `action` is the Formspree
 * endpoint, so a plain submit still arrives (on Formspree's own thank-you
 * page). Once React hydrates, `noValidate` switches the browser's bubbles
 * off in favour of the inline messages below, which stay visible, are tied
 * to their fields with aria-describedby, and move focus to the first field
 * that needs attention.
 */

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMPTY: Enquiry = { name: '', email: '', message: '' };

/** Nothing to subscribe to: the value only changes once, at hydration. */
const noSubscription = () => () => {};

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Enquiry>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formMessage, setFormMessage] = useState('');
  const sending = useRef(false);
  const honeypot = useRef<HTMLInputElement>(null);
  const nameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const messageField = useRef<HTMLTextAreaElement>(null);
  const sentHeading = useRef<HTMLParagraphElement>(null);

  // False in the server HTML, true once hydrated: the moment this component's
  // own validation can take over from the browser's.
  const isEnhanced = useSyncExternalStore(
    noSubscription,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (status === 'sent') sentHeading.current?.focus();
  }, [status]);

  const update =
    (key: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValues((current) => ({ ...current, [key]: value }));
      // Clear a field's message once the visitor starts fixing it.
      if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    };

  const focusFirst = (fieldErrors: Partial<Record<FieldName, string>>) => {
    if (fieldErrors.name) nameField.current?.focus();
    else if (fieldErrors.email) emailField.current?.focus();
    else if (fieldErrors.message) messageField.current?.focus();
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return; // a second press while sending does nothing

    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus('error');
      setFormMessage('Please fill in the highlighted fields.');
      focusFirst(found);
      return;
    }

    sending.current = true;
    setStatus('sending');
    setFormMessage('');
    setErrors({});

    const result = await submitEnquiry(contactFormEndpoint, values, {
      honeypot: honeypot.current?.value ?? '',
    });
    sending.current = false;

    if (result.ok) {
      setStatus('sent');
      return;
    }

    setStatus('error');
    setErrors(result.fields);
    setFormMessage(result.message);
    focusFirst(result.fields);
  };

  if (status === 'sent') {
    return (
      <div className={styles.sent}>
        <p className={styles.sentTitle} ref={sentHeading} tabIndex={-1}>
          Thanks, your message has been sent.
        </p>
        <p className={styles.sentBody}>
          I’ll reply to {values.email}. If you don’t hear back within a few days, please
          email me directly at{' '}
          <a className={styles.link} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
        <Button
          onClick={() => {
            setValues(EMPTY);
            setStatus('idle');
          }}
        >
          Write another
        </Button>
      </div>
    );
  }

  const describedBy = (key: FieldName, hint?: string) =>
    [hint, errors[key] ? `${id}-${key}-error` : null].filter(Boolean).join(' ') || undefined;

  const isSending = status === 'sending';

  return (
    <form
      className={styles.fields}
      action={contactFormEndpoint}
      method="POST"
      onSubmit={submit}
      noValidate={isEnhanced}
      aria-busy={isSending}
    >
      <div className={styles.field}>
        <label className={`${styles.label} mono`} htmlFor={`${id}-name`}>
          Name
        </label>
        <input
          ref={nameField}
          id={`${id}-name`}
          className={styles.input}
          name="name"
          value={values.name}
          onChange={update('name')}
          required
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy('name')}
        />
        {errors.name && (
          <p className={styles.error} id={`${id}-name-error`}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={`${styles.label} mono`} htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          ref={emailField}
          id={`${id}-email`}
          className={styles.input}
          type="email"
          name="email"
          value={values.email}
          onChange={update('email')}
          required
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy('email')}
        />
        {errors.email && (
          <p className={styles.error} id={`${id}-email-error`}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={`${styles.label} mono`} htmlFor={`${id}-message`}>
          Project or enquiry
        </label>
        <p className={styles.hint} id={`${id}-message-hint`}>
          A project you’d like designed, or a role you’re hiring for. A few lines is plenty.
        </p>
        <textarea
          ref={messageField}
          id={`${id}-message`}
          className={styles.textarea}
          name="message"
          rows={6}
          value={values.message}
          onChange={update('message')}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message', `${id}-message-hint`)}
        />
        {errors.message && (
          <p className={styles.error} id={`${id}-message-error`}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Formspree's honeypot field, `_gotcha`. Off-screen and skipped by the
          keyboard, so only a bot fills it. Not `display: none`, which some
          bots detect. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Leave this empty
          <input ref={honeypot} name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.submit}>
        <Button type="submit" busy={isSending}>
          {isSending ? 'Sending…' : 'Send message'}
        </Button>
      </div>

      {/* Announced, and never silent about a failure. The direct address is
          always offered when something went wrong. */}
      <div className={styles.status} role="status" aria-live="polite">
        {isSending && <p>Sending your message…</p>}
        {status === 'error' && formMessage && (
          <p className={styles.formError}>
            {formMessage}{' '}
            {!Object.keys(validate(values)).length && (
              <>
                You can also email me directly at{' '}
                <a className={styles.link} href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                .
              </>
            )}
          </p>
        )}
      </div>
    </form>
  );
}
