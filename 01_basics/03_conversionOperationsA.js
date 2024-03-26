// ***** Operations ***** //

// Basic arithmetic operation with unary negation
let value = 3;
let negValue = -value; // Negates the value of 'value'

// Logging the type and value of negValue
console.log(typeof negValue); // Expected output: number
console.log(negValue); // Expected output: -3

// Demonstrating basic arithmetic operations (uncomment to see the results in console)
// console.log(2+2); // Addition: 4
// console.log(3-2); // Subtraction: 1
// console.log(2*2); // Multiplication: 4
// console.log(2**3); // Exponentiation: 8
// console.log(2/3); // Division: a fraction
// console.log(2%3); // Modulo: remainder of the division 2/3

// String concatenation
let str1 = "Hello";
let str2 = " Ahmed";

console.log(str1 + str2); // Concatenates str1 and str2: "Hello Ahmed"

// Demonstrating type coercion during concatenation
console.log(1 + "2"); // Number + String: "12"
console.log("1" + 2); // String + Number: "12"

// Order of operations affecting string concatenation and number addition
console.log("1" + 2 + 2); // Left to right concatenation: "122"
console.log("1" + (2 + 2)); // Addition inside parentheses, then concatenation: "14"

console.log(1 + 2 + "2"); // Number addition, then string concatenation: "32"
console.log((1 + 2) + "2"); // Same as above due to left to right operation: "32"

// Mixed arithmetic operation with modulo
console.log((3 + 4) * 5 % 3); // Calculated as ((3+4)*5)%3: 2

// Demonstrating the unary plus operator with boolean and string
console.log(true); // Boolean true
console.log(+true); // Unary plus converts true to 1
console.log(+""); // Unary plus converts empty string to 0

// Multiple assignments in one line
let num1, num2, num3;
num1 = num2 = num3 = 2+2; // All variables get the result of 2+2
console.log(num1); // 4

// Increment operators demonstration
let gameCounter = 100;
gameCounter++; // Post-increment: increments after returning the value
console.log(gameCounter); // 101

let gameCounterTwo = 100;
console.log(++gameCounterTwo); // Pre-increment: increments before returning the value, so it's 101





let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// link to study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment#postfix_increment
