var fs = require('fs');
fs.renameSync('input.txt', 'newData.txt')
console.log('File renamed successfully');

console.log('This method is synchronous');