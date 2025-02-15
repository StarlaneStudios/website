import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { BlogSchema } from "./schemas";

export const blogs = defineCollection({
	loader: glob({ pattern: "*.mdx", base: "./content/blogs" }),
	schema: BlogSchema,
});

export const collections = { blogs };
