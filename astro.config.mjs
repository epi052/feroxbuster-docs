// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	site: 'https://epi052.github.io',
	base: '/feroxbuster-docs',
	integrations: [
		starlight({
			title: 'feroxbuster',
			logo: {
				src: './src/assets/ferox-logo.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/epi052/feroxbuster' },
				{ icon: 'x.com', label: 'Twitter', href: 'https://twitter.com/epi052' },
			],
			plugins: [
				starlightDocSearch({
					appId: 'RHDX50IYZJ',
					apiKey: '85be150986a3c297d83209a14350331a',
					indexName: 'feroxbuster',
				}),
			],
			sidebar: [
				{ label: 'Overview', slug: 'overview' },
				{ label: 'Installation', autogenerate: { directory: 'installation' } },
				{ label: 'Configuration', autogenerate: { directory: 'configuration' } },
				{ label: 'Examples', autogenerate: { directory: 'examples' } },
				{ label: 'Interpreting Results', slug: 'interpreting-results' },
				{ label: 'FAQ', autogenerate: { directory: 'faq' } },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
