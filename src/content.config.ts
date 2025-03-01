import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { docsProjects } from "./contants";
import { BlogSchema, DocsSchema } from "./schemas";

export const blogs = defineCollection({
	loader: glob({ pattern: "*.mdx", base: "./content/blogs" }),
	schema: BlogSchema,
});

export const docs = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./content/docs" }),
	schema: DocsSchema,
});

export const docsCollections = {
	...docsProjects.reduce<Docs>((prev, curr) => {
		prev[curr as Doc] = docs;
		return prev;
	}, {} as Docs),
};

export const urlForCollection = {
	...docsProjects.reduce<Record<Doc, Doc>>(
		(prev, curr) => {
			prev[curr as Doc] = curr;
			return prev;
		},
		{} as Record<Doc, Doc>,
	),
};

export type Doc = (typeof docsProjects)[number];
export type Docs = Record<Doc, typeof docs>;

export const collections = { blogs, docs };
