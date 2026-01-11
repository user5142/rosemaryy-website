// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosemaryyapp.com',
  vite: {
    // @ts-expect-error - Vite plugin type mismatch between root and Astro's nested Vite dependency
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});