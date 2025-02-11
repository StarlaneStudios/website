import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "*.md", base: "./content/blog" }),
	schema: z.object({
		title: z.string(),
		enabled: z.boolean(),
		authors: z.array(z.string()),
	}),
});

export const collections = { blog };
