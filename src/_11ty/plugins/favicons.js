const fs = require('fs')
const IconIco = require('@shockpkg/icon-encoder').IconIco
const sharp = require('sharp')

module.exports = (eleventyConfig, pluginOptions = {}) => {
  if (!pluginOptions) {
    throw new Error('favicons error: no plugin options specified, input and output both required')
  }

  if (!pluginOptions.input) {
    throw new Error('favicons error: no input file specified, input is required')
  }

  if (!pluginOptions.output) {
    throw new Error('favicons error: no output directory specified, output is required')
  }

  // Copy primary SVG as-is
  eleventyConfig.addPassthroughCopy({ [pluginOptions.input]: './favicon.svg' })

  // Create output directory
  fs.mkdirSync(pluginOptions.output, { recursive: true })

  // Prepare SVG for different PNG sizes
  const image = sharp(pluginOptions.input)
  const metadata = image.metadata()

  metadata.then(metadata => {
    const sixtyfour = image.resize(64, 64).png().toBuffer()
    const thirtytwo = image.resize(32, 32).png().toBuffer()
    const sixteen = image.resize(16, 16).png().toBuffer()
    const oneeighty = image.resize(180, 180).png().toBuffer()
    const oneninetytwo = image.resize(192, 192).png().toBuffer()
    const fivetwelve = image.resize(512, 512).png().toBuffer()

    // .ico
    const ico = new IconIco()

    Promise.all([sixtyfour, thirtytwo, sixteen]).then(sizes => {
      sizes.forEach(size => {
        ico.addFromPng(size)
      })

      fs.writeFileSync(`${pluginOptions.output}/favicon.ico`, ico.encode())
    })

    // apple-touch-icon.png
    oneeighty.then(data => {
      return fs.writeFileSync(`${pluginOptions.output}/apple-touch-icon.png`, data)
    })

    // manifest.webmanifest (192x192, 512x512)
    oneninetytwo.then(data => {
      return fs.writeFileSync(`${pluginOptions.output}/icon-192.png`, data)
    })

    fivetwelve.then(data => {
      return fs.writeFileSync(`${pluginOptions.output}/icon-512.png`, data)
    })

    fs.writeFileSync(`${pluginOptions.output}/manifest.webmanifest`, JSON.stringify({
      icons: [
        { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { src: '/icon-512.png', type: 'image/png', sizes: '512x512' }
      ]
    }))
  })

  // HTML shortcode
  eleventyConfig.addShortcode('favicons', svgPath => {
    return `
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
    `.trim()
  })
}
