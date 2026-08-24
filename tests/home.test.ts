import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Home from '../src/pages/index.astro';

describe('Home page', () => {
  it('renders the real hero headline and page title', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('Agricola Theological Seminary | Equipping the next generation of Bible teachers');
    expect(html).toContain('Shaping');
    expect(html).toContain('hero__highlight">Servants</span>');
    expect(html).toContain('hero__highlight">Word</span>');
    expect(html).toContain('hero__highlight">Church</span>');
    expect(html).toContain('and the World.');
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

  it('places the pull-quote after the testimonials section', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    const pullQuoteIndex = html.indexOf('Colossians 3:16 (ESV)');
    const testimonialsIndex = html.indexOf('What Our Community Says');

    expect(testimonialsIndex).toBeGreaterThan(-1);
    expect(pullQuoteIndex).toBeGreaterThan(testimonialsIndex);
    expect(html).not.toContain('Life at Agricola');
  });

  it('places the real news items between the hero and the degree programs', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    const heroIndex = html.indexOf('hero__highlight">Servants</span>');
    const newsIndex = html.indexOf('ATS Partners with Gateway Seminary');
    const programsIndex = html.indexOf('Our Degree Programs');

    expect(heroIndex).toBeGreaterThan(-1);
    expect(newsIndex).toBeGreaterThan(heroIndex);
    expect(programsIndex).toBeGreaterThan(newsIndex);
    expect(html).not.toContain('committed to training future pastors');
  });

  it('renders all three real news items', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Home);

    expect(html).toContain('ATS Partners with Gateway Seminary');
    expect(html).toContain('Seminary Days with Dr. Mooney');
    expect(html).toContain('Public Lectures Conference');
  });
});
