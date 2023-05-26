module.exports = {
  prompt: ({ prompter }) => {
    return prompter.prompt([
      {
        type: 'input',
        name: 'fileName',
        message: 'File name:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Store name:',
        initial() {
          return this.state.answers.fileName
        },
      },
    ])
  },
}
