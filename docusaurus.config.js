import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "AI-DevHub",
	tagline: "Your ultimate resource hub for all things Artificial Intelligence and Machine Learning",
	favicon: "img/favicon.ico",
	url: "https://ai-dev-hub.com/",
	baseUrl: "/",
	organizationName: "AI-DevHub",
	projectName: "AI-DevHub",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	plugins: [
		[
			"@docusaurus/plugin-google-gtag",
			{
				trackingID: "G-V7X4VHX2VL",
				anonymizeIP: true,
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: "img/social-card.jpg",
			navbar: {
				title: "AI-DevHub",
				logo: {
					alt: "AI-DevHub Logo",
					src: "img/logo.png",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "docSidebar",
						position: "left",
						label: "Resources",
					},
					{
						href: "https://github.com/alingavriliuc/ai-dev-hub",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
