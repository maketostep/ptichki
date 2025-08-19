/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        milk: "#FFFFFF",
        black: "#000000",
        gray: {
          100: "#f4f4f4",
          300: "#d4d4d4",
          600: "#6b6b6b",
        },
      },
    },
  },
  plugins: [],
};
