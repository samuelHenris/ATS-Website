import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import PageHeader from '../src/components/PageHeader.astro';
import graduationPhoto from '../src/assets/images/about/carousel/graduation-3.jpg';

describe('PageHeader', () => {
  it('renders the title and description', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(PageHeader, {
      props: {
        title: 'About',
        description: 'A local, church-based training institute.',
        slides: [{ image: graduationPhoto, alt: 'ATS graduates' }],
      },
    });

    expect(html).toContain('About');
    expect(html).toContain('A local, church-based training institute.');
  });

  it('renders a Home breadcrumb link and the current page label', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(PageHeader, {
      props: {
        title: 'About',
        description: 'A local, church-based training institute.',
        slides: [{ image: graduationPhoto, alt: 'ATS graduates' }],
      },
    });

    expect(html).toContain('href="/"');
    expect(html).toContain('>Home</a>');
    expect(html).toContain('class="page-header__current"');
    expect(html).toContain('>About</span>');
  });

  it('renders one slide per image with its alt text', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(PageHeader, {
      props: {
        title: 'About',
        description: 'A local, church-based training institute.',
        slides: [
          { image: graduationPhoto, alt: 'First slide' },
          { image: graduationPhoto, alt: 'Second slide' },
        ],
      },
    });

    expect(html).toContain('alt="First slide"');
    expect(html).toContain('alt="Second slide"');
    expect((html.match(/page-header__photo"/g) ?? []).length).toBeGreaterThanOrEqual(2);
  });
});
