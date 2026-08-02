import { defineConfig } from 'vitest/config';
import path from 'node:path';

/**
 * Unit tests. Scoped to `tests/unit` so Playwright's specs in `tests/e2e`
 * are never picked up by the wrong runner.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['lib/**/*.ts', 'content/**/*.ts'],
      reporter: ['text', 'html'],
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
});
