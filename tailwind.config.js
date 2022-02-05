module.exports = {
  content: [
    './docs/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        alablaster: '#F9F9F9',
        valencia: '#DB3344',
        'oxford-blue': '#2B3B44'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
