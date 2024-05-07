import esprima from 'esprima'
import estraverse from 'estraverse'
import escodegen from 'escodegen'
import fs from 'fs'

/**
 * ast transform
 *
 * @param {{ tempalte?: string, enter?: Function, leave?: Function }} param
 * @param {string} [param0.tempalte='']
 * @param {Function} [param0.enter]
 * @param {Function} [param0.leave]
 * @returns {string}
 */
const ast = (tempalte, {parse = 'parse', enter, leave }) => { 
  let tree = esprima[parse](tempalte)
  estraverse.traverse(tree, {
    enter,
    leave
  })
  return escodegen.generate(tree)
}
export default ast

export const dbToSchema = () => {
  const dbFile = fs.readFileSync('./db/auvsbm.sql', 'utf8')
  ast(dbFile, {
    parse: 'parseScript',
    enter: (node) => {
      console.log(node)
    }
  })
}

dbToSchema();




