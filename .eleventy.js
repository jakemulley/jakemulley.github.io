const { filters, plugins, shortcodes, transforms } = require('./src/_11ty')

module.exports = eleventyConfig => {
  // Layout aliases
  for (const name of ['page']) {
    eleventyConfig.addLayoutAlias(name, `layouts/${name}.njk`)
  }

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/CNAME')
  eleventyConfig.addPassthroughCopy('./src/robots.txt')
  eleventyConfig.addPassthroughCopy({ './src/_assets/images': './images' })

  // Filters
  for (const filter of filters) {
    eleventyConfig.addFilter(filter.name, filter.package)
  }

  // Plugins
  for (const plugin of plugins) {
    eleventyConfig.addPlugin(plugin.package, (plugin.config || undefined))
  }

  // Shortcodes
  for (const shortcode of shortcodes) {
    eleventyConfig.addShortcode(shortcode.name, shortcode.package)
  }

  // Transforms
  for (const transform of transforms) {
    eleventyConfig.addTransform(transform.name, transform.package)
  }

  return {
    dir: {
      input: './src',
      output: './docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
