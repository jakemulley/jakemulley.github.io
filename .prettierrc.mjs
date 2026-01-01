/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  useTabs: false,
  singleQuote: true,
  semi: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindStylesheet: './src/styles/global.css',
};

export default config;
