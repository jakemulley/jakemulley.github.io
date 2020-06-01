const nunjucks = require('nunjucks')
const path = require('path')

nunjucks.configure([
  path.join(process.cwd(), '/templates')
], {
  autoescape: true
})

module.exports = nunjucks
