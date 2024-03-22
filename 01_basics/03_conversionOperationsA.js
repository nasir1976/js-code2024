// ***** Operations ***** //

let value = 3
let negValue = -value

console.log(typeof negValue)
console.log(negValue)

// console.log(2+2)
// console.log(3-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)


let str1 = "Hello"
let str2 = " Ahmed"

console.log(str1 + str2)

console.log(1 + "2") // result 12
console.log("1" + 2) // result 12

console.log("1" + 2 + 2) // result 112
console.log("1" + (2 + 2)) // result 14

console.log(1 + 2 + "2") // result 32
console.log((1 + 2) + "2") // result 32

console.log((3 + 4) * 5 % 3)

console.log(true) // result true
console.log(+true) // result 1 -- don't use
console.log(+"") // result 0 -- don't use
// console.log(true+) // error result 1

// -- don't use
let num1, num2, num3
num1 = num2 = num3 = 2+2 // result 4
console.log(num1)

let gameCounter = 100
gameCounter++
console.log(gameCounter)

let gameCounterTwo = 100
console.log(++gameCounterTwo)




let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// link to study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment#postfix_increment
