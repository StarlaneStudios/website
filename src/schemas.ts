import { z } from "astro:content";

export const BlogCategoryTypeSchema = z.enum(['news', 'devlogs', 'releases']);

export const BlogSchema = z.object({
	visible: z.boolean(),
	date: z.date(),
	author: z.string(),
	title: z.string(),
	summary: z.string(),
	categories: z.array(BlogCategoryTypeSchema)
});