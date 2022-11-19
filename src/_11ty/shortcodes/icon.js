const fs = require('fs')
const path = require('path')
const simpleIcons = require('simple-icons/icons')
const heroicons = path.dirname(require.resolve('heroicons/package.json'))

module.exports = function (icon) {
  if (icon.startsWith('brand:')) {
    const slug = icon.replace('brand:', '')
    const firstChar = slug.charAt(0).toUpperCase()

    return simpleIcons[`si${firstChar}${slug.slice(1)}`].svg
  }

  const iconPath = path.resolve(`${heroicons}/24/outline/${icon}.svg`)

  if (fs.existsSync(iconPath)) {
    return fs.readFileSync(iconPath, 'utf8')
  }

  return `<span class="text-red-500 font-mono">Icon "${icon}" not found</span>`
}
