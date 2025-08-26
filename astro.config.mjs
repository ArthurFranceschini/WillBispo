// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs()
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 4321, 
      allowedHosts: [
        'd549dcabad4f.ngrok-free.app',
      ],
    }
  }
});