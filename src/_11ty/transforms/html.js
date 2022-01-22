const { minify } = require('html-minifier-terser')
const pretty = require('pretty')

module.exports = async function (content) {
  if (this.outputPath.endsWith('.html')) {
    const minifiedHtml = await minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    })

    return pretty(minifiedHtml)
  }

  return content
}
