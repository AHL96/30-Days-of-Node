var buff = Buffer.alloc(20)
console.log(buff);

var buff = Buffer.allocUnsafe(10)
console.log(buff);

var buff = Buffer.from('Nodejsera')
console.log('buff: ' + buff)

var buff1 = Buffer.from('Alex')
var compared = buff.compare(buff1)
console.log(compared);

var buff2 = Buffer.from('30 days of node')
var buff3 = Buffer.concat([buff, buff1, buff2])
console.log(buff3);

var newbuff = Buffer.alloc(buff.length)
buff.copy(newbuff)
console.log(newbuff.toString())

console.log(buff.equals(newbuff))

var buff = Buffer.allocUnsafe(10).fill('alex')
console.log(buff.toString())

console.log(buff.indexOf('x'))

console.log(buff.length)

console.log(buff.slice(0, 5).toString())

console.log(buff.toJSON())

