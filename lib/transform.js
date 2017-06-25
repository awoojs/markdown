const md = require('markdown-it')()

function markdown (file, options, files) {
  const markdownOutput = md.render(file.contents)
  const newFile = Object.assign(file, {
    contents: markdownOutput
  })

  return newFile
}

module.exports = markdown
