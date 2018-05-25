var crypto = require('crypto')
var fs = require('fs')

var algorithm = 'md5'
var secret = 'Rj2895647'
var hmac = crypto.createHmac(algorithm, secret)

var filename = 'data.txt'
var file_data = fs.ReadStream(filename)

file_data.on('data', function (data) {
    hmac.update(data)
})

file_data.on('end', function () {
    var gen_hmac = hmac.digest('hex')
    console.log('Hmac generated using ' + algorithm);
    console.log('Hashed output is : ' + gen_hmac);
    console.log('file name is : ' + filename);
    fs.writeFileSync(filename, gen_hmac)
})