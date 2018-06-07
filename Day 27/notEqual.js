var assert = require('assert')
var a = 10
var b = 10.25
var c = '10'

assert.notEqual(a, b, "Nothing printed because they are using != for comparison");
assert.notEqual(a, c, "Error because values match");
