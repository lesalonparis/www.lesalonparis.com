/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
      extend: {
	  fontFamily: {
	      bodoni: ['"Bodoni Moda SC"'],
	      raleway: ['"Raleway"']
	  }
      },
  },

  plugins: [],
};
