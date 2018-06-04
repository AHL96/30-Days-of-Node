function hello() {
    console.log('This will run immediately')
}
console.log('it will print the data immediately')
setImmediate(hello)

function hello2() {
    console.log('this will run recursively')
}

console.log('it will print the data recursively after 200ms again and again')
setInterval(hello2, 200)

function hello3() {
    console.log('this will run once ')
}

console.log('it will print the data once after the delay')
setTimeout(hello3, 2000)


console.log('it is supposed to print the data immediately')
var imm = setImmediate(hello)
clearImmediate(imm)

console.log('it is supposed print the data recursively after a delay again and again')
var s_int = setInterval(hello, 2000)
clearInterval(s_int)

console.log('it is supposed to print the data once after the delay')
var tim = setTimeout(hello, 2000)
clearTimeout(tim)