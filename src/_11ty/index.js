const path = require('path')

module.exports = {
  filters: [
    {
      name: 'humanDate',
      package: require('./filters/date')
    }
  ],
  plugins: [
    {
      package: require('@11ty/eleventy-plugin-syntaxhighlight')
    },
    {
      package: require('@11ty/eleventy-navigation')
    },
    {
      package: require(path.resolve(process.cwd(), './src/_11ty/plugins/favicons')),
      config: {
        input: './src/_assets/favicon.svg',
        output: './docs'
      }
    }
  ],
  shortcodes: [
    {
      name: 'now',
      package: require('./shortcodes/now')
    },
    {
      name: 'icon',
      package: require('./shortcodes/icon')
    }
  ],
  transforms: [
    {
      name: 'html',
      package: require('./transforms/html')
    }
  ]
}
