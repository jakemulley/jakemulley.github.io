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

module.exports = async (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.css')) {
    const processed = await postcss.process(content, {
      from: `${process.cwd()}/main.css`
    })

    return processed.css
  }

  return content
}
