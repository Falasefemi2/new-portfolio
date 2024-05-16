/** @format */

// ./sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "schema";

export default defineConfig({
  name: "portfolio", // Can be whatever
  title: "Project Portfolio", // Can be whatever
  projectId: "skm4nw2d",
  dataset: "production",
  studioBasePath: "/admin",
  useCdn: false,
  schema: {
    types: schemaTypes,
  },
});
