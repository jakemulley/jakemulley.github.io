const htmlmin = require('html-minifier')

module.exports = function (content) {
  if (process.env.ELEVENTY_ENV === 'production' && this.outputPath && this.outputPath.endsWith('.html')) {
    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    })
  }

  return content
}
