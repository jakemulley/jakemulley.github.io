const htmlmin = require('html-minifier')
const postcss = require('postcss')([
  require('postcss-import'),
  require('precss'),
  require('autoprefixer'),
  require('@fullhuman/postcss-purgecss')({
    content: ['./docs/**/*.html']
  }),
  require('cssnano')({
    preset: 'default'
  })
])

module.exports = (eleventyConfig) => {
  // Passthrough CNAME
  eleventyConfig.addPassthroughCopy('./src/CNAME')

  // Passthrough images and favicons
  eleventyConfig.addPassthroughCopy({ './src/_assets/favicons': './favicons' })
  eleventyConfig.addPassthroughCopy({ './src/_assets/images': './images' })

  // Minify HTML
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }

    return content
  })

  // Compile CSS
  eleventyConfig.addWatchTarget('./src/_assets/css/')
  eleventyConfig.addTransform('postcss', async (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.css')) {
      const processed = await postcss.process(content, {
        from: ''
      })

      return processed.css
    }

    return content
  })

  return {
    dir: {
      input: 'src',
      output: 'docs'
    }
  }
}
