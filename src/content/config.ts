import { defineCollection } from "astro:content";
import { strapiLoader } from "../strapi-loader";


// Define the Strapi posts collection
// This sets up a custom loader for Strapi content
const strapiPostsLoader = defineCollection({
  loader: strapiLoader({ contentType: "article" }),
});

// Export the collections to be used in Astro
export const collections = {
  strapiPostsLoader,
};

