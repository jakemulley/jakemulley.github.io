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

module.exports = async (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.css')) {
    const processed = await postcss.process(content, {
      from: `${process.cwd()}/main.css`
    })

    return processed.css
  }

  return content
}
