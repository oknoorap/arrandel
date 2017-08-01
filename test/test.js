import path from 'path'
import test from 'ava'
import arrandel from '../index'

const testFile = path.join(__dirname, 'test.php')

test('expect variable from test.php should return variable list', t => {
  const arry = arrandel(testFile)
  t.is(typeof arry, 'object')
  t.false(Array.isArray(arry))
  t.true(Object.keys(arry).length > 0)
})

test('variable $config should be exist', t => {
  const arry = arrandel(testFile)
  t.is(typeof arry.config, 'string')
})

test('variable $another_array should be exist', t => {
  const arry = arrandel(testFile)
  t.is(typeof arry.another_array, 'string')
})
