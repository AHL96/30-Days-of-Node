var fs = require('fs');
var filename = 'content.txt';
var content = fs.readFileSync(filename);
console.log(content);