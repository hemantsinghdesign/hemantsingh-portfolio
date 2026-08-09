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
 * It composes a mailto: link rather than posting anywhere, so the site needs
 * no backend and no third-party script. To use a real endpoint later,
 * replace the body of `submit` with a fetch to Formspree, Basin or a Next
 * route handler — the markup and styling do not change.
 *
 * It is a real <form> even with no endpoint: that is what makes Enter submit
 * from any field, and what makes `required` and `type="email"` produce the
 * browser's own validation and error messages. `noValidate` is deliberately
 * not set, and submission is prevented in the handler rather than by
 * omitting the element.
 *
 * The confirmation is in an aria-live region so it is announced, not just
 * shown.
 */
export function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    budget: '',
    note: '',
  });
  const [isSent, setSent] = useState(false);

  const update =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  const canSubmit =
    values.name.trim().length > 0 && values.email.trim().length > 0;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    // There is no endpoint — the browser must not navigate away.
    event.preventDefault();
    if (!canSubmit) return;

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Budget: ${values.budget || '—'}`,
      '',
      values.note,
    ].join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `New project — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  if (isSent) {
    return (
      <div className={styles.sent} aria-live="polite">
        <p className={styles.sentTitle}>Message ready.</p>
        <p className={styles.sentBody}>
          Your mail app should have opened with the details filled in. If it did
          not, write to{' '}
          <a className={styles.link} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>{' '}
          directly.
        </p>
        <Button onClick={() => setSent(false)}>Write another</Button>
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

      <Button type="submit" disabled={!canSubmit}>
        Send message
      </Button>
    </form>
  );
}
