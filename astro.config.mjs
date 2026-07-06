import { defineConfig, envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  env: {
    schema: { RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }) },
  },
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
