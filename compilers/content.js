const fs = require('fs')
const glob = require('glob')
const graymatter = require('gray-matter')
const markdown = require('markdown-it')()
const path = require('path')
const templates = require('./templates.js')

const actions = {
  async getAllContent () {
    return Promise.all(glob.sync('content/**/**.md').map(async function (file) {
      const content = await fs.promises.readFile(file, 'utf8')
      const matter = graymatter(content)

      return {
        path: file.replace('content/', '').replace('.md', '.html'),
        content: markdown.render(matter.content),
        frontmatter: matter.data
      }
    }))
  },
  async generatePages (content) {
    for (const page of content) {
      const render = templates.render('pages/index.njk', {
        content: page.content,
        frontmatter: page.frontmatter
      })

      await fs.promises.mkdir(path.join(process.cwd(), '/docs/', page.path.replace('index.html', '')), { recursive: true })
      await fs.promises.writeFile(path.join(process.cwd(), '/docs/', page.path), render)
    }
  }
};

(async function () {
  const content = await actions.getAllContent()
  return actions.generatePages(content)
})()
