import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, basePath, dataset, projectId, useCdn } from "./sanity";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    studioUrl:basePath,
    perspective: "published",
    encodeSourceMap: process.env.NEXT_PUBLIC_APP_URL !== 'production',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}