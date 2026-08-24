import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Card from '../src/components/Card.astro';
import bachelorPhoto from '../src/assets/images/programs/bachelor.jpg';

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

  it('renders no image when none is given', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Card, {
      props: {
        title: 'Master in Theological Studies',
        body: 'This is a 2-3 year degree to prepare men and women ministry in the church.',
      },
    });

    expect(html).not.toContain('card__image');
  });

  it('renders the given image with its alt text when provided', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Card, {
      props: {
        title: 'Bachelor of Theological Studies',
        body: 'This is a 3-4 year degree, with no prior degree required, to prepare men and women for serving in ministry.',
        image: bachelorPhoto,
        imageAlt: 'A lecture in session at Agricola Theological Seminary',
      },
    });

    expect(html).toContain('card__image');
    expect(html).toContain('alt="A lecture in session at Agricola Theological Seminary"');
  });
});
