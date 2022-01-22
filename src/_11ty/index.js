module.exports = {
  filters: {
    humanDate: require('./filters/date')
  },
  plugins: {
    '@11ty/eleventy-plugin-syntaxhighlight': null,
    './src/_11ty/plugins/favicons': {
      input: './src/_assets/favicon.svg',
      output: './docs'
    }
  },
  shortcodes: {
    now: require('./shortcodes/now')
  },
  transforms: {
    html: require('./transforms/html'),
    css: require('./transforms/css')
  }
}
