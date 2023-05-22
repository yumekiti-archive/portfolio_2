/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      'background': '#d8eefe',
			'card': '#fffffe',
			'headline': '#094067',
			'paragraph': '#5f6c7b',
			'button': '#3da9fc',
			'button-hover': '#3189CC',
			'button-text': '#fffffe',
			'emphasis': '#ef4565',
			dark: {
				'background': '#094067',
				'card': '#093452',
				'headline': '#fffffe',
				'paragraph': '#bae6fd',
				'headline': '#fffffe',
			}
    },
		extend: {
			animation: {
				"bounce-in-top": "bounce-in-top 1.1s 0.6s ease   both",
				"jello-horizontal": "jello-horizontal 0.8s ease   both",
				"rotate-in-2-tl-ccw": "rotate-in-2-tl-ccw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
			},
			keyframes: {
				"bounce-in-top": {
					"0%": {
						transform: "translateY(-500px)",
						"animation-timing-function": "ease-in",
						opacity: "0"
					},
					"38%": {
						transform: "translateY(0)",
						"animation-timing-function": "ease-out",
						opacity: "1"
					},
					"55%": {
						transform: "translateY(-65px)",
						"animation-timing-function": "ease-in"
					},
					"72%,90%,to": {
						transform: "translateY(0)",
						"animation-timing-function": "ease-out"
					},
					"81%": {
						transform: "translateY(-28px)"
					},
					"95%": {
						transform: "translateY(-8px)",
						"animation-timing-function": "ease-in"
					}
				},
				"rotate-in-2-tl-ccw": {
					"0%": {
						transform: "rotate(45deg)",
						"transform-origin": "0 0",
						opacity: "0"
					},
					to: {
						transform: "rotate(0)",
						"transform-origin": "0 0",
						opacity: "1"
					}
				},
				"jello-horizontal": {
					"0%,to": {
						transform: "scale3d(1, 1, 1)"
					},
					"30%": {
						transform: "scale3d(1.25, .75, 1)"
					},
					"40%": {
						transform: "scale3d(.75, 1.25, 1)"
					},
					"50%": {
						transform: "scale3d(1.15, .85, 1)"
					},
					"65%": {
						transform: "scale3d(.95, 1.05, 1)"
					},
					"75%": {
						transform: "scale3d(1.05, .95, 1)"
					}
				}
			}
		},
	},
	plugins: [],
}
