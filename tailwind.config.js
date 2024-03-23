/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        main: "#2c82c9",
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
      },
    },
  },
  plugins: [],
};

