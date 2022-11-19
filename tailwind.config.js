module.exports = {
  content: [
    './src/**/*.{html,js,njk,md}',
    './docs/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        alablaster: '#F9F9F9',
        valencia: '#DB3344'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
