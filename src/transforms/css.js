const plugins = [
  require('postcss-import'),
  require('precss'),
  require('autoprefixer'),
  require('@fullhuman/postcss-purgecss')({
    content: ['./docs/**/*.html']
  })
]

if (process.env.ELEVENTY_ENV === 'production') {
  plugins.push(require('cssnano')({
    preset: 'default'
  }))
}

const postcss = require('postcss')(plugins)

module.exports = async function (content) {
  if (this.outputPath && this.outputPath.endsWith('.css')) {
    const output = await postcss.process(content, {
      from: undefined
    })

    return output.css
  }

  return content
}
