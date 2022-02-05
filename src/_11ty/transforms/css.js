const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
  ...(process.env.ELEVENTY_ENV === 'production' ? [require('cssnano')] : [])
]

const postcss = require('postcss')(plugins)

module.exports = async function (content) {
  if (this.outputPath.endsWith('.css')) {
    const { css } = await postcss.process(content, {
      from: undefined
    })

    return css
  }

  return content
}
