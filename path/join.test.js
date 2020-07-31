const path = require('path')

test('one', () => {
  console.log(path.join())
  console.log(path.join('.'))
  console.log(path.join('/'))
  console.log(path.join('\\'))
})

test('two', () => {
  console.log(path.join('a'))
  console.log(path.join('./a'))
  console.log(path.join('.\\a'))
  console.log(path.join('/a'))
  console.log(path.join('\\a'))
})

test('three', () => {
  expect(path.join('a')).toBe('a')
  expect(path.join('./a')).toBe('a')
  expect(path.join('/a')).toBe('\\a')
  expect(path.join('/a', './b')).toBe('\\a\\b')
  expect(path.join('/a', '/b')).toBe('\\a\\b')
  expect(path.join('./a', './b')).toBe('a\\b')
  expect(path.join('./a', '/b')).toBe('a\\b')
})
