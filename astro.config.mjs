import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://starlane.studio",
	integrations: [mdx(), sitemap({
		filter: (page) => {
			// Remove docs temporarily since they're not finished
			return !page.includes("/docs");
		}
	})],
	vite: {
		plugins: [tailwindcss()],
	},
});
