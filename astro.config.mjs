// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CloudLeaf',
			logo: {
				src: './src/assets/icon.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Ying-Luan/CloudLeaf' }],
			sidebar: [
				{
					label: 'Guides',
					translations: {
						'zh-CN': '指南',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Quick start',
							translations: {
								'zh-CN': '快速开始',
							},
							slug: 'guides/quick-start'
						},
						{
							label: 'Usage',
							translations: {
								'zh-CN': '使用指南',
							},
							slug: 'guides/usage'
						},
						{
							label: 'Sync sources configuration',
							translations: {
								'zh-CN': '同步源配置',
							},
							slug: 'guides/sync-sources'
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						'zh-CN': '参考',
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			customCss: ['./src/styles/global.css'],
			// defaultLocale: 'en',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			components: {
				Footer: './src/components/ConditionalFooter.astro',
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
