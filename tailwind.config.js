/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				error: '#E15554',
				primary: '#5094F5',
				altwarn: '#F6C644',
				warn: '#e1bc29',
				ok: '#3BB273',
				background: '#FEFEFE',
				text: '#121212'
			}
		},
		screens: {
			sd: '350px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '740px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			xxl: '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
