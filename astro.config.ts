import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://bustinbung.com",

  markdown: {
      shikiConfig: {
          theme: 'catppuccin-frappe',
      }
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: 'modern-compiler',
              }
          }
      }
  },

  integrations: [mdx()],
  adapter: vercel()
});