const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = (eleventyConfig) => {
  // Watch targets
  eleventyConfig.addWatchTarget('./src/_assets/css/')

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight)

  // Filters
  eleventyConfig.addFilter('humanDate', require('./src/filters/date'))

  // Shortcodes
  eleventyConfig.addShortcode('now', require('./src/shortcodes/now'))

  // Transforms
  eleventyConfig.addTransform('htmlmin', require('./src/transforms/html'))
  eleventyConfig.addTransform('postcss', require('./src/transforms/css'))

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')
  eleventyConfig.addPassthroughCopy({ './src/_assets/favicons': './favicons' })
  eleventyConfig.addPassthroughCopy({ './src/_assets/images': './images' })

  return {
    dir: {
      input: 'src',
      output: 'docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
