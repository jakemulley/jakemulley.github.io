const { filters, plugins, shortcodes, transforms } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')
  eleventyConfig.addPassthroughCopy('./src/robots.txt')
  eleventyConfig.addPassthroughCopy({ './src/_assets/images': './images' })

  // Filters
  for (const name of Object.keys(filters)) {
    eleventyConfig.addFilter(name, filters[name])
  }

  // Plugins
  for (const name of Object.keys(plugins)) {
    eleventyConfig.addPlugin(require(name), plugins[name])
  }

  // Shortcodes
  for (const name of Object.keys(shortcodes)) {
    eleventyConfig.addShortcode(name, shortcodes[name])
  }

  // Transforms
  for (const name of Object.keys(transforms)) {
    eleventyConfig.addTransform(name, transforms[name])
  }

  return {
    dir: {
      input: './src',
      output: './docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
