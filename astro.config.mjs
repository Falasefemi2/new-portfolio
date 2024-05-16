// astro.config.mjs
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: "skm4nw2d",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-05-16", // insert the current date to access the latest version of the API
      studioBasePath: '/admin' // If you want to access the Studio on a route
    }), react()]
});