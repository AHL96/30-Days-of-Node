var assert = require('assert');

assert.ok(true, "No error ");
assert.ok(1, "No error");
assert.ok(false, "It is an error");
assert.ok(0, " Again error");

var a = 10;
var b = 20;
assert(a > b, "A should be greater than B");
