import { describe, expect, it } from 'vitest';
import { labelForPath } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

describe('route labels', () => {
  it('labels every top-level route', () => {
    expect(labelForPath('/')).toBe('Index');
    expect(labelForPath('/work')).toBe('Work');
    expect(labelForPath('/resume')).toBe('Resume');
  });

  it('labels nested routes by section', () => {
    expect(labelForPath('/projects/sora-matcha')).toBe('Case');
    expect(labelForPath('/journal/some-post')).toBe('Journal');
  });

  it('falls back for unknown routes', () => {
    expect(labelForPath('/nowhere')).toBe('Lost');
  });
});

describe('metadata', () => {
  it('always produces an absolute canonical url', () => {
    const meta = pageMetadata({
      title: 'Work',
      description: 'Selected work.',
      path: '/work',
    });
    expect(meta.alternates?.canonical).toBe(absoluteUrl('/work'));
  });

  it('sets a large-image twitter card', () => {
    const meta = pageMetadata({ title: 'A', description: 'B', path: '/a' });
    expect(meta.twitter).toMatchObject({ card: 'summary_large_image' });
  });
});
