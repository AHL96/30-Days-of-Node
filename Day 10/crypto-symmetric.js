var crypto = require('crypto'), algorihtm = 'aes-256-ctr', password = 'RJ23edrf';

function encrypt(text) {
    var cipher = crypto.createCipher(algorihtm, password)
    var crypted = cipher.update(text, 'uft8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorihtm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec
}

var text = "Nodejsera for all web development languages"
var e = encrypt(text)
console.log(e);
var d = decrypt(e)
console.log(d);

