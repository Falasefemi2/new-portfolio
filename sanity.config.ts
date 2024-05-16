/** @format */

// ./sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "portfolio", // Can be whatever
  title: "Project Portfolio", // Can be whatever
  projectId: "skm4nw2d",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});
