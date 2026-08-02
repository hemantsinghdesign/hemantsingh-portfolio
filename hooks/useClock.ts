'use client';

import { useEffect, useState } from 'react';

/**
 * Purpose: a ticking wall clock for the spec bar.
 * Props: none — this is a hook. Returns the time as "HH:MM:SS", or an empty
 *   string until mounted.
 * Used in: SpecBar.
 * Reusable: yes, though it is deliberately specific to a 24-hour readout.
 *
 * Starts empty rather than with a server time: rendering a timestamp during
 * SSR guarantees a hydration mismatch, since the server and the browser are
 * never on the same second.
 */
export function useClock(): string {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
