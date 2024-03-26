// Enforcing strict mode for the whole script
"use strict";

// Since we are using Node.js environment, browser-specific commands like alert won't work. 
// Thus, the 'alert' function call is commented out.
// alert("Hello"); // We are using Node.js, not a browser

// Declaring variables to demonstrate basic data types
let name = "Ali"; // String type
let age = 18; // Number type
let isLogingIn = false; // Boolean type

// JavaScript supports the following data types:
// Number: for integers and floating-point numbers, JavaScript's number type can represent values up to 2 to the power of 53
// BigInt: an arbitrary precision integer
// String: for text, represented by enclosing the text in "" or ''
// Boolean: true or false values
// Null: a standalone type that has a single value `null`
// Undefined: a type that contains a single value `undefined`
// Symbol: a unique and immutable primitive value that can be used as the key of an Object property
// Object: for more complex data structures

// Demonstrating the use of `typeof` operator to check the type of different variables/values
console.log(typeof undefined); // Should display "undefined"
console.log(typeof null); // Interesting case: displays "object", a historical JavaScript oddity