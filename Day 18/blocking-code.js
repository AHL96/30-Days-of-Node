var fs = require('fs')

var date1 = new Date()
var time_start = date1.getTime()
console.log('Starting at : ' + time_start);
console.log('Lets start reading the file');

var filename = 'content.txt'
var content = fs.readFileSync(filename)
console.log('Content ' + content);

var d2 = new Date()
var time_end = d2.getTime()
console.log('finishing at: ' + time_end);
var execution_time = time_end - time_start
console.log('Time for execution: ' + execution_time);


