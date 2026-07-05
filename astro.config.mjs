import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.astro/**', '**/.wrangler/**'],
      },
    },
  },
});
