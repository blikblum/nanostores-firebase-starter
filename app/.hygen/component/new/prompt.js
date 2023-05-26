const { normalize } = require('path')

module.exports = {
  prompt: (x) => {
    const { prompter, h } = x
    return prompter.prompt([
      {
        type: 'select',
        name: 'root',
        message: 'Root directory:',
        choices() {
          return ['components']
        },
      },
      {
        type: 'input',
        name: 'path',
        message({ answers }) {
          const root = answers.root
          return `Path (relative to src/${root})`
        },
        result(path) {
          const root = this.state.answers.root
          return normalize(`src/${root}/${path}/`).replace(/\\/gm, '/')
        },
      },
      {
        type: 'input',
        name: 'tagName',
        message: 'Element tag:',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
        initial() {
          return h.inflection.camelize(this.state.answers.tagName.replace('-', '_'))
        },
      },
    ])
  },
}
