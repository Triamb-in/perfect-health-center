import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId && process.env.NODE_ENV === "production") {
  console.error("❌ [Sanity Studio] NEXT_PUBLIC_SANITY_PROJECT_ID is not configured.");
}

export default defineConfig({
  basePath: "/studio",
  name: "perfect-health-center-studio",
  title: "Perfect Health Center — Content Studio",
  projectId: projectId || "ciisvyoq", // safe fallback for local Studio UI typing only
  dataset,
  plugins: [structureTool()],
  schema,
});
