var fs = require('fs');
var content = "we are appending a file synchronously using node.js"
fs.appendFileSync('input.txt', content);
console.log('File appened successfully');