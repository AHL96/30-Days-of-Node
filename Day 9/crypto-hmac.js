//HMAC

var seceretKey = 'yoursecretkeyhere'
var message = 'nodejsera'

var crypto = require('crypto')

//sha256 hamc
var hmac = crypto.createHmac('sha256', seceretKey)
data = hmac.update(message)
gen_hmac = data.digest('hex')
console.log('sha256 hamc');
console.log('hmac : ' + gen_hmac);

//sha512 hmac
var hmac = crypto.createHmac('sha512', seceretKey)
data = hmac.update(message)
gen_hmac = data.digest('hex')
console.log('sha512 hamc');
console.log('hmac : ' + gen_hmac);

// md5 HAMC
var hmac = crypto.createHmac('md5', seceretKey)
data = hmac.update(message)
gen_hmac = data.digest('hex')
console.log('md5 hamc');
console.log('hmac : ' + gen_hmac);


// whirlpool hmac
var hmac = crypto.createHmac('whirlpool', seceretKey)
data = hmac.update(message)
gen_hmac = data.digest('hex')
console.log('whirlpool hamc');
console.log('hmac : ' + gen_hmac);