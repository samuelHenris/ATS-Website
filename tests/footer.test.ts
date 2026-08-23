import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Footer from '../src/components/Footer.astro';

describe('Footer', () => {
  it('renders the Quick Links column', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);

    expect(html).toContain('Quick Links');
    expect(html).toContain('href="/contact"');
    expect(html).toContain('href="/programs"');
    expect(html).toContain('href="/apply"');
  });

  it('renders the Learn More column', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);

    expect(html).toContain('Learn More');
    expect(html).toContain('href="/about"');
    expect(html).toContain('href="/leadership"');
  });

  it('renders a Donate to ATS CTA and the current-year copyright', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);
    const year = new Date().getFullYear();

    expect(html).toContain('Donate to ATS');
    expect(html).toContain('href="/donate"');
    expect(html).toContain(`${year} Agricola Theological Seminary. All rights reserved.`);
  });
});
