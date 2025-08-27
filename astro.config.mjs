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
        '80e58bb32404.ngrok-free.app',
      ],
    }
  }
});