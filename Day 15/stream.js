var fs = require('fs');

var wdata = "I am working with streams for the first time"

var writeStream = fs.createWriteStream('aboutMe.txt')

writeStream.write(wdata)
writeStream.end()

writeStream.on('finish', () => {
    console.log('data written successfully using streams');
    console.log('Now tring to read the same file using read streams');

    var readStream = fs.createReadStream('aboutMe.txt')
    var rContents = ''

    readStream.on('data', (chunk) => {
        rContents += chunk
    })

    readStream.on('error', (error) => {
        console.log(err);
    })

    readStream.on('end', () => {
        console.log('read: ' + rContents);
    })

    console.log('performed write and read using streams');



})