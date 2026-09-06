import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ciisvyoq";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "perfect-health-center-studio",
  title: "Perfect Health Center — Content Studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
});
