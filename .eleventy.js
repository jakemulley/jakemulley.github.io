const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const favicons = require('./src/plugins/favicons')

module.exports = (eleventyConfig) => {
  // Watch targets
  eleventyConfig.addWatchTarget('./src/_assets/css/')

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(favicons, {
    input: './src/_assets/favicon.svg',
    output: './docs'
  })

  // Filters
  eleventyConfig.addFilter('humanDate', require('./src/filters/date'))

  // Shortcodes
  eleventyConfig.addShortcode('now', require('./src/shortcodes/now'))

  // Transforms
  eleventyConfig.addTransform('htmlmin', require('./src/transforms/html'))
  eleventyConfig.addTransform('postcss', require('./src/transforms/css'))

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')
  eleventyConfig.addPassthroughCopy({ './src/_assets/images': './images' })

  return {
    dir: {
      input: 'src',
      output: 'docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
