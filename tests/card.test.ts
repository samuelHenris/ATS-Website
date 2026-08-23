import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Card from '../src/components/Card.astro';

describe('Card', () => {
  it('renders the given title and body', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Card, {
      props: {
        title: 'Master in Theological Studies',
        body: 'This is a 2-3 year degree to prepare men and women ministry in the church.',
      },
    });

    expect(html).toContain('Master in Theological Studies');
    expect(html).toContain('This is a 2-3 year degree to prepare men and women ministry in the church.');
  });
});
