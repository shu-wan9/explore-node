const path = require('path')

test('one', () => {
  expect(path.resolve()).toBe(process.cwd())
  expect(path.resolve('.')).toBe(process.cwd())
  console.log(path.resolve('/'))
  console.log(path.resolve('\\'))
})

test('two', () => {
  console.log(path.resolve('a'))
  console.log(path.resolve('./a'))
  console.log(path.resolve('.\\a'))
  console.log(path.resolve('/a'))
  console.log(path.resolve('\\a'))
})

test('three', () => {
  expect(path.resolve('a')).toBe(path.resolve(process.cwd(), './a'))
})
