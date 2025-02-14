import type { BlogPostCategory } from "./types";

export const BLOG_CATEGORIES: BlogPostCategory[] = [
	{ label: 'All', value: 'all', color: '' },
	{ label: 'News', value: 'news', color: 'text-starlane-primary' },
	{ label: 'Dev Logs', value: 'devlogs', color: 'text-starlane-orange' },
	{ label: 'Releases', value: 'releases', color: 'text-starlane-secondary' }
]