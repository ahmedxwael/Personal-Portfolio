import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				growth: {
					"0%": { transform: "scale(50%)", opacity: "0" },
					"100%": { transform: "scale(100%)", opacity: "1" },
				},
			},
			animation: {
				growth: "growth 500ms linear 1 forwards",
			},
		},
	},
	plugins: [],
};
export default config;
