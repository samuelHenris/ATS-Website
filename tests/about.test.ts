import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import About from '../src/pages/about.astro';

describe('About page', () => {
  it('renders the page title and header', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('About ATS | Agricola Theological Seminary');
    expect(html).toContain('<h1');
    expect(html).toContain('>About</h1>');
  });

  it('renders the real mission statement', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('Our Mission');
    expect(html).toContain('pastor-theologians and Christians to serve the local churches');
  });

  it('renders all three real values', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('Faith');
    expect(html).toContain('Joy');
    expect(html).toContain('History');
    expect(html).toContain('Our Values');
  });

  it('renders the real founding history', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('Our History');
    expect(html).toContain('cooperative effort between two local church plants');
  });

  it('renders the Mikael Agricola bio with a link to Doctrine', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('Mikael Agricola');
    expect(html).toContain('Agricola studied under');
    expect(html).toContain('Martin Luther in Wittenberg');
    expect(html).toContain('class="agricola__link" href="/doctrine"');
  });
});
