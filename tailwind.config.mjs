/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        valencia: {
          DEFAULT: "#DB3344",
          50: "#F7CFD3",
          100: "#F3BEC3",
          200: "#ED9BA3",
          300: "#E77884",
          400: "#E15664",
          500: "#DB3344",
          600: "#B6202F",
          700: "#861823",
          800: "#560F16",
          900: "#27070A",
          950: "#0F0304",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
