import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const isProduction = process.env.NODE_ENV === "production";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ciisvyoq";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-01";
// Read token for server-side queries. Never expose write tokens or send to client.
const readToken = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);

// We use useCdn: false on the server to guarantee that freshly published client edits in Sanity
// are returned immediately on dynamic routes without edge-CDN propagation delay.
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: false,
      token: readToken || undefined,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any): string {
  if (!builder || !source) return "";
  try {
    return builder.image(source).url() || "";
  } catch (err) {
    console.warn("⚠️ [Sanity Asset Warning] Failed to generate image URL:", err);
    return "";
  }
}
