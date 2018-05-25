var crypto = require('crypto')
var fs = require('fs')

pubK = privK = fs.readFileSync('pub.key').toString()

privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}

// public key for encryption, private key for decryption
var buf = Buffer.from('This is secret code', 'utf8')

secretData = crypto.publicEncrypt(pubK, buf)
console.log(secretData.toString('utf8'));

origData = crypto.privateDecrypt(privK, secretData)
console.log(origData.toString());


console.log('--------------------');


// public key for decryption and private key for encryption
var buf = Buffer.from('rishabh', 'utf8')

secretData = crypto.privateEncrypt(privK, buf)
console.log(secretData.toString('utf8'));

origData = crypto.publicDecrypt(pubK, secretData)
console.log(origData.toString());
