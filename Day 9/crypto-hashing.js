// CRYPTO

var message = 'nodejsera'

//md5
// Loading the crypto module in nodejs
var crypto = require('crypto');
// creating hash object
var hash = crypto.createHash('md5')
// passing the data to be hashed
data = hash.update(message, 'utf-8')
// creating the hash in the required format
gen_hash = data.digest('hex')
// printing the output to the console
console.log('md5');
console.log("hash : " + gen_hash)

// whirlpool
hash = crypto.createHash('whirlpool')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('whirlpool');
console.log("hash : " + gen_hash)

// sha1
hash = crypto.createHash('sha1')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('SHA1');
console.log("hash : " + gen_hash)


// sha224
hash = crypto.createHash('sha224')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('sha225');
console.log('hash : ' + gen_hash);

// sha256
hash = crypto.createHash('sha256')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('sha256');
console.log('hash : ' + gen_hash);

// sha384
hash = crypto.createHash('sha384')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('sha384');
console.log('hash : ' + gen_hash);

// sha512
hash = crypto.createHash('sha512')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('sha512');
console.log('hash : ' + gen_hash);

// ripemd-160
hash = crypto.createHash('ripemd160')
data = hash.update(message, 'utf-8')
gen_hash = data.digest('hex')
console.log('ripemd160');
console.log('hash : ' + gen_hash);