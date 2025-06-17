// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cidibeee.github.io/darkwater-syndicate/',
	base: '/Darkwater_Website/',
	integrations: [mdx(), sitemap()],
});
