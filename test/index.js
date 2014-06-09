var test = require('tape')
var ase = require('../')
var fs = require('fs')

test('decode', function(t) {
  var buffer = fs.readFileSync('test/sample.ase')
  var output = require('./sample.json')

  t.deepEqual(
      simplify(ase.decode(buffer))
    , simplify(output)
  )

  t.end()
})

function simplify(data) {
  data.colors.forEach(function(c) {
    c.color = c.color.map(function(n) {
      return Math.round(n * 1000) / 1000
    })
  })

  return data
}
