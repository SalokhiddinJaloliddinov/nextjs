/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "rgb(var(--primary))",
          hover: "var(--primary-hover)",
        },
        secondary: {
          base: "var(--secondary)",
          hover: "var(--secondary-hover)",
        },
        danger: {},
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
