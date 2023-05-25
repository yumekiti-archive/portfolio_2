/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      'main': '#d8eefe',
			'card': '#fffffe',
			'stroke': '#094067',
			'secondary': '#5f6c7b',
			'highlight': '#3da9fc',
			'highlight-hover': '#3189CC',
			'highlight-text': '#fffffe',
			'tertiary': '#ef4565',
			dark: {
				'main': '#094067',
				'card': '#093452',
				'stroke': '#fffffe',
				'secondary': '#bae6fd',
			}
    },
		extend: {
			animation: {
				"scale-out-tr": "scale-out-tr 0.5s 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
				"tracking-in-expand": "tracking-in-expand 1s 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
				"bounce-in-top": "bounce-in-top 1.1s 2.5s ease   both",
				"rotate-in-2-tl-ccw": "rotate-in-2-tl-ccw 0.6s 4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
				"fade-in-top": "fade-in-top 0.6s 5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
				"jello-horizontal": "jello-horizontal 0.8s ease   both"
			},
			keyframes: {
				"scale-out-tr": {
					"0%": {
						transform: "scale(1)",
						"transform-origin": "100% 0%",
						opacity: "1"
					},
					to: {
						transform: "scale(0)",
						"transform-origin": "100% 0%",
						opacity: "1"
					}
				},
				"tracking-in-expand": {
					"0%": {
						"letter-spacing": "-.5em",
						opacity: "0"
					},
					"40%": {
						opacity: ".6"
					},
					to: {
						opacity: "1"
					}
				},
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
				"fade-in-top": {
					"0%": {
						transform: "translateY(-30px)",
						opacity: "0"
					},
					to: {
						transform: "translateY(0)",
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
						transform: "scale3d(.75, 1, 1)"
					},
					"50%": {
						transform: "scale3d(1.15, .80, 1)"
					},
					"65%": {
						transform: "scale3d(.95, .95, 1)"
					},
					"75%": {
						transform: "scale3d(1.05, .90, 1)"
					}
				}
			}
		},
	},
	plugins: [],
}
