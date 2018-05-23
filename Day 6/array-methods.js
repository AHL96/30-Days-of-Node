//Create an array
var names = ['rjs', 'ricky', 'alex']
console.log(names);
//get length
console.log(names.length);
//different ways to make arrays
var arr = new Array(3);
arr = [1, 5, 7]

var arr1 = new Array(2, 5, 7);
console.log("arr : " + arr);
console.log("arr 1 : " + arr1);

// push()
arr = ['a', 'e', 'i', 'o'];
console.log(arr);
arr.push('u')
console.log(arr);


// pop()
arr = [5, 5, 8, 7, 6]
console.log(arr);
arr.pop()
console.log(arr);


// unshift()
arr = [5, 5, 8, 7, 6]
console.log(arr);
arr.unshift(1);
console.log(arr);


// shift()
arr = ['b', 'a', 'e', 'i', 'o', 'u']
console.log(arr);
temp = arr.shift();
console.log(temp);
console.log(arr);


// reverse()
arr = ['b', 'e', 'a', 'o', 'p', 'n', 'r']
console.log(arr);
arr.reverse()
console.log(arr);


// sort()
arr.sort()
console.log(arr);


// splice()
arr = ['b', 'e', 'a', 'o', 'p', 'n', 'r']
console.log(arr);
arr.splice(2, 2, 'rj', 'nodejs');
console.log(arr);

arr = ['b', 'e', 'a', 'o', 'p', 'n', 'r']
console.log(arr);
arr.splice(2, 2)
console.log(arr);


// concat()
arr = ['tomatoes', 'pineapple']
arr2 = ['mango', 'peach', 'apple']
console.log(arr);
console.log(arr2);
var new_arr = arr.concat(arr2)
console.log(new_arr);


// indexOf()
arr = [5, 2, 8, 5, 6]
console.log(arr);
var pos = arr.indexOf(8)
console.log("index of 8 is : " + pos);
var pos1 = arr.indexOf(5)
console.log("index of 5 is : " + pos1);


// lastIndexOf()
arr = [5, 2, 8, 5, 6]
console.log(arr);
var pos = arr.lastIndexOf(5)
console.log("index of 5 is : " + pos);


// join()
arr = [5, 2, 8, 5, 6]
arr1 = ['a', 'b', 'c', 'd']
console.log(arr);
console.log(arr1);
var str = arr.join()
var str1 = arr1.join(":")
console.log(str);
console.log(str1);


// slice()
arr = [5, 2, 8, 5, 6]
arr1 = ['a', 'b', 'c', 'd']
console.log(arr);
console.log(arr1);
var str = arr.slice(2, 4)
var str1 = arr1.slice(-2, -1)
console.log(str);
console.log(str1);

// every()
arr = [2, 4, 6, 8, 10]
arr1 = [2, 3, 6, 8]
function even(value) {
    return value % 2 == 0
}
var out = arr.every(even)
var out1 = arr1.every(even)
console.log("Ouput of array 1 : " + out);
console.log("Ouput of array 2 : " + out1);

// filter()
arr = [2, 4, 6, 8, 10]
arr1 = [2, 3, 6, 8]
function even(value) {
    return value % 2 == 0
}
var out = arr.filter(even)
var out1 = arr1.filter(even)
console.log("Ouput of array 1 : " + out);
console.log("Ouput of array 2 : " + out1);


// find()
arr = [2, 4, 6, 8, 10]
arr1 = [2, 3, 4, 7, 8]
function odd(value) {
    return value % 2 == 1
}
var out = arr.filter(odd)
var out1 = arr1.filter(odd)
console.log("Output of array 1 : " + out);
console.log("Output of array 2 : " + out1);

// forEach()
var arr = ['1', '2', '3', '5', '8']
arr.forEach(function (element) {
    console.log(element);
})


// reduce()
arr = [5, 5, 8, 7, 6]
console.log(arr);
function mul(value, total) {
    return value * total
}

var output = arr.reduce(mul)
console.log("The product of the array is : " + output);
