/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1A501",
        danger: "#DF6951",
        dark: "#212832",
        muted: "#5E6282",
        cream: "#FFF8F3",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-volkhov)", "serif"],
      },
      maxWidth: {
      container: "1140px",
      },
    },
  },
  plugins: [],
};
