var crypto = require('crypto')
var fs = require('fs')

var algorithm = 'sha256'
var hash = crypto.createHash(algorithm)

var filename = 'data.txt'
var file_data = fs.ReadStream(filename)

file_data.on('data', function (data) {
    hash.update(data)
})

file_data.on('end', function () {
    var gen_hash = hash.digest('hex')
    console.log('Hash generated using ' + algorithm);
    console.log('Hashed output is : ' + gen_hash + '\nFile name is : ' + filename);
    fs.writeFileSync(filename, gen_hash)
})