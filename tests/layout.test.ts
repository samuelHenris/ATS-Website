import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Layout from '../src/layouts/Layout.astro';

describe('Layout', () => {
  it('renders the page title, description, nav, footer, and slotted content', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Layout, {
      props: {
        title: 'Test Page Title',
        description: 'Test page description.',
      },
      slots: {
        default: '<p class="slot-marker">Slot content</p>',
      },
    });

    expect(html).toContain('<title>Test Page Title</title>');
    expect(html).toContain('content="Test page description."');
    expect(html).toContain('class="nav"');
    expect(html).toContain('class="footer"');
    expect(html).toContain('class="slot-marker"');
    expect(html).toContain('Slot content');
  });
});
