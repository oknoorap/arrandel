const {existsSync, readFileSync} = require('fs')
const PhpParser = require('php-parser')
const unparser = require('php-unparser')

const parser = new PhpParser({
  parser: {
    extractDoc: false
  }
})

module.exports = filename => {
  if (existsSync(filename) === false) {
    throw new Error('File not exists.')
  }

  const codes = readFileSync(filename, 'ascii')
  const AST = parser.parseCode(codes)
  const variableList = {}

  if (AST.kind === 'program') {
    AST.children.forEach(child => {
      if (child.kind === 'assign' && child.operator === '=' && child.left.kind === 'variable' && child.right.kind === 'array') {
        variableList[child.left.name] = unparser(child.right)
      }
    })
  }

  return variableList
}
