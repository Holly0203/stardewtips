// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stardewtips.com',
  redirects: {
    '/tips/': { status: 301, destination: '/' },
  },
  integrations: [sitemap()],
});