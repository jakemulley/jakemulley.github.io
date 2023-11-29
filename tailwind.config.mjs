/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        alablaster: "#F9F9F9",
        valencia: "#DB3344",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
