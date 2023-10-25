/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'pale-blue': 'hsl(225, 100%, 94%)',
				'bright-blue': ' hsl(245, 75%, 52%)',
				'Very-pale-blue': 'hsl(225, 100%, 98%)',
				'Desaturated-blue': 'hsl(224, 23%, 55%)',
				'Dark-blue': 'hsl(223, 47%, 23%)'
			},
			fontSize: {
				'paragraph-font': '16px'
			},
			fontFamily: {
				'red-hat-display': 'Red Hat Display, sans-serif'
			}

		},
	},
	plugins: [],
}

/* 
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Very pale blue: hsl(225, 100%, 98%)
- Desaturated blue: hsl(224, 23%, 55%)
- Dark blue: hsl(223, 47%, 23%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display)
- Weights: 500, 700, 900
*/
