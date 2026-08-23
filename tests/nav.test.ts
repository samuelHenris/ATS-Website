import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Nav from '../src/components/Nav.astro';

describe('Nav', () => {
  it('renders the top-level links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav);

    expect(html).toContain('About ATS');
    expect(html).toContain('href="/about"');
    expect(html).toContain('News');
    expect(html).toContain('href="/news"');
    expect(html).toContain('Doctrine');
    expect(html).toContain('href="/doctrine"');
    expect(html).toContain('Contact');
    expect(html).toContain('href="/contact"');
  });

  it('renders the Academic dropdown with its five sub-links', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav);

    expect(html).toContain('Academic');
    expect(html).toContain('Admissions');
    expect(html).toContain('href="/admissions"');
    expect(html).toContain('Programs');
    expect(html).toContain('href="/programs"');
    expect(html).toContain('Leadership');
    expect(html).toContain('href="/leadership"');
    expect(html).toContain('Accredited Partners');
    expect(html).toContain('href="/accredited-partners"');
    expect(html).toContain('Public Lectures');
    expect(html).toContain('href="/public-lectures"');
  });

  it('renders a Donate link', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav);

    expect(html).toContain('href="/donate"');
    expect(html).toContain('Donate');
  });
});
