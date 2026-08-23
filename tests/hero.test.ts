import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Hero from '../src/components/Hero.astro';
import heroImage from '../src/assets/images/hero-home.png';

describe('Hero', () => {
  it('renders the kicker, headline, and both CTAs', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero, {
      props: {
        kicker: 'Join us!',
        headline: 'Shaping Servants of the Word for the Church and the World.',
        primaryCta: { label: 'Apply now', href: '/apply' },
        secondaryCta: { label: 'Learn more', href: '/about' },
        image: heroImage,
        imageAlt: 'Agricola Theological Seminary community',
      },
    });

    expect(html).toContain('Join us!');
    expect(html).toContain('Shaping Servants of the Word for the Church and the World.');
    expect(html).toContain('Apply now');
    expect(html).toContain('href="/apply"');
    expect(html).toContain('Learn more');
    expect(html).toContain('href="/about"');
    expect(html).toContain('alt="Agricola Theological Seminary community"');
  });
});
