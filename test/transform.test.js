const test = require('ava')
const transform = require('../lib/transform')

test('parses markdown', t => {
  const input = {
    contents: '# Hello'
  }

  const expected = {
    contents: '<h1>Hello</h1>\n'
  }

  t.deepEqual(transform(input), expected)
})
