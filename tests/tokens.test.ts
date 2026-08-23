import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

describe('design tokens', () => {
  const css = () =>
    readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf-8');

  it('defines the approved navy/white palette', () => {
    expect(css()).toContain('--color-navy: #1c2e47;');
    expect(css()).toContain('--color-white: #ffffff;');
  });

  it('does not introduce a gold/accent color', () => {
    expect(css()).not.toMatch(/gold|#c9a24a/i);
  });
});
