var fs = require('fs')

var d1 = new Date()
var start = d1.getTime()
console.log('{Check point 1} starting at: ' + start);
console.log('Lets start reading a file');

var filename = 'content.txt'
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    console.log('Content ' + data);
})

var d2 = new Date()
var end = d2.getTime()
console.log('{check point 2} ending at: ' + end);
var execution_time = end - start
console.log('execution time: ' + execution_time);


