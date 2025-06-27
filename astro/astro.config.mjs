// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "tvtqrltk",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
});
