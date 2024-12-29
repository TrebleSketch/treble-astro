// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://treblesketch.github.io', //might be https://treblesketch.github.io/treble-astro/  ? 
  base: 'treble-astro',
});