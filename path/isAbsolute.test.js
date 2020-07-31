const { isAbsolute } = require('path')

test('', () => {
  expect(isAbsolute('.')).toBe(false)
  expect(isAbsolute('a')).toBe(false)
  expect(isAbsolute('./a')).toBe(false)
  expect(isAbsolute('.\\a')).toBe(false)

  expect(isAbsolute('/a')).toBe(true)
  expect(isAbsolute('\\a')).toBe(true)
})
