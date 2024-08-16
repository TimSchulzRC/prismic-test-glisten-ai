/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
      colors: {
        dark: "#070815",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
