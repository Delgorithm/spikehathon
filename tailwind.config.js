/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DGO: ["Dela Gothic One"],
			},
		},
		screens: {
			xxs: "320px",
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
			"4xl": "2560px",
			"5xl": "3840px",
			watch40mm: "162px",
			watch44mm: "197px",
			mobileS: "360px",
			mobileM: "390px",
			mobileL: "400px",
			tablet: "640px",
			laptop: "1024px",
			desktop: "1280px",
			wideScreen: "2560px",
		},
	},
	plugins: [],
};
