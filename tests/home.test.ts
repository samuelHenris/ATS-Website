import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Home from '../src/pages/index.astro';

describe('Home page', () => {
  it('renders the real hero headline and page title', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('Agricola Theological Seminary | Equipping the next generation of Bible teachers');
    expect(html).toContain('Shaping Servants of the Word for the Church and the World.');
  });

  it('renders all three real degree programs', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('Bachelor of Theological Studies');
    expect(html).toContain('Master in Theological Studies');
    expect(html).toContain('Master of Divinity');
  });

  it('renders the real Colossians 3:16 pull-quote', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('Let the word of Christ dwell in you richly');
    expect(html).toContain('Colossians 3:16 (ESV)');
  });

  it('renders real testimonials', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    // Astro's server-side html-escaper escapes straight apostrophes in
    // interpolated text (e.g. "'" -> "&#39;"); this is correct, equivalent
    // rendered output, not a content change.
    expect(html).toContain('Dr. Preston Pearce');
    expect(html).toContain("Raimo Survo, ATS &#39;24 graduate");
    expect(html).not.toContain('Matti Itkonen');
    expect(html).not.toContain('Dave Pike');
  });

  it('renders the community band section with a link to About', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('A community of students and teachers, learning the Word together.');
    expect(html).toContain('class="community-band__cta" href="/about"');
    expect(html).toContain('>About Us</a>');
  });
});
