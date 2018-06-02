var zlib = require('zlib')
var fs = require('fs')

var zip = zlib.createGzip()
var read = fs.createReadStream('newfile.txt')
var write = fs.createWriteStream('newfile.txt.gz')

read.pipe(zip).pipe(write)
console.log('Zipped successfully');

read.close()
write.close()


var unzip = zlib.createUnzip()
var read = fs.createReadStream('newfile.txt.gz')
var write = fs.createWriteStream('unzip.txt')
read.pipe(unzip).pipe(write)
console.log('unZipped succesfully');

read.close()
write.close()

