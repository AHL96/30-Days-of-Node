var os = require('os')
var value = os.cpus()
console.log(JSON.stringify(value));

console.log(os.arch())

console.log(os.endianness())

console.log(os.freemem())

console.log(os.hostname())

console.log(os.homedir())

console.log(os.platform())

console.log(os.release())

console.log(os.tmpdir())

console.log(os.totalmem())

console.log(os.uptime())

console.log(os.type())

