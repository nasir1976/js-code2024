// Primitive data types
const score = 100; // Number type
const scoreValue = 100.3; // Number type with a decimal

const isLoggedIn = false; // Boolean type
const outsideTemp = null; // Null type

let userEmail; // Undefined type

// Symbol type ensures uniqueness, even if the descriptions are the same
const id = Symbol('123');
const anotherId = Symbol('123');

// Correct way to compare Symbols is not with `typeof` but directly or using `Symbol.description`
console.log(id === anotherId); // false, because each Symbol is unique
console.log(id.description === anotherId.description);  // true, descriptions are the same but Symbols are unique

const bigNumber = 55120429934565989834n; // BigInt type for large numbers

console.log(bigNumber); // Displays the big number
console.log(typeof bigNumber); // Displays 'bigint'



// ++++++++ Reference (Non-Primitive) Data Types ++++++++ //

// Arrays are reference types
const heros = ["Shaktiman", "Naagraj", "Doga"]; // Correct syntax for array initialization

// Object is a collection of key-value pairs
let myObj = {
    name: "Ahmed",
    age: 35,
};

// Functions are first-class objects in JavaScript
const myFunction = function() {
    console.log("Hello world");
};