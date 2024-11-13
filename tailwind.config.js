/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '390px',
			lg: '500px'
		},
		fontFamily: {
			main: ['Kumbh Sans', 'serif'],
			secondary: ['Roboto Slab', 'serif'],
			final: ['Space Mono', 'serif']
		},
		extend: {
			colors: {
				tomatoRed: 'hsl(0,91%,71%)',
				aquaBlue: 'hsl(182,91%,71%)',
				violet: 'hsl(284,89%,74%)',
				mediumGrey: 'hsl(227,100%,92%)',
				lightGrey: 'hsl(229,52%,96%)',
				darkBlue: 'hsl(234,39%,14%)'
			}
		}
	},

	plugins: []
};
