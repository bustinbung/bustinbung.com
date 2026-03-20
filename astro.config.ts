import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: "https://bustinbung.com",

	markdown: {
		shikiConfig: {
			theme: 'catppuccin-frappe',
		}
	},

	fonts: [
		{
			provider: fontProviders.local(),
			name: "PP Neue Montreal",
			cssVariable: "--font-neue-montreal",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Bold.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-BoldItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Book.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Italic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Light.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Medium.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Regular.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-Thin.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontreal/PPNeueMontreal-ThinItalic.woff2"]
					}
				]
			}
		},
		{
			provider: fontProviders.local(),
			name: "PP Neue Montreal Mono",
			cssVariable: "--font-neue-montreal-mono",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Bold.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-BoldItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Book.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Light.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Medium.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Regular.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-RegularItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-Thin.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPNeueMontrealMono/PPNeueMontrealMono-ThinItalic.woff2"]
					}
				]
			}
		},
		{
			provider: fontProviders.local(),
			name: "PP Writer",
			cssVariable: "--font-writer",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Black.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BlackItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BlackText.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Bold.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BoldItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BoldText.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Book.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BookItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-BookText.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Regular.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-RegularItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-RegularText.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Thin.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-ThinItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-ThinText.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-Ultrabold.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-UltraboldItalic.woff2"]
					},
					{
						src: ["./src/assets/fonts/PPWriter/PPWriter-UltralightText.woff2"]
					}
				]
			}
		}
	],

	vite: {
	},

	integrations: [mdx()]
});