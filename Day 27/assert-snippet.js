var assert = require('assert')

function demo(x, y, z) {
    var value = x + y + z
    return value
}
var output = demo(4, 1, 10)
console.log(output);
var expected = 15
assert(output === expected)

expected = 12
assert(output === expected)

