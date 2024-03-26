// Enforcing strict mode for the whole script
"use strict";

// ***** Variable Declarations and Initializations for Demonstrating Type Conversions ***** //

let score = "35"; // A string that represents a numeric value
let scoretwo = "35ABC"; // A string that starts with a numeric value followed by non-numeric characters
let scorethree = null; // A null value
let scorefour = undefined; // An undefined value

// Demonstrating the use of typeof operator
console.log(typeof score); // Expected output: string
console.log(typeof (score)); // Expected output: string
console.log(scorethree); // Expected output: null
console.log(scorefour); // Expected output: undefined

// ***** Numeric Conversions ***** //

// Converting strings and other types to numbers
let valueInNumber = Number(score); // Converts "35" to the number 35
let valueInNumberTwo = Number(scoretwo); // Converts "35ABC" to NaN (Not a Number) because of the non-numeric characters
let valueInNumberThree = Number(scorethree); // Converts null to 0
let valueInNumberFour = Number(scorefour); // Converts undefined to NaN

// Logging the results of numeric conversions
console.log(valueInNumber); // 35
console.log(valueInNumberTwo); // NaN
console.log(valueInNumberThree); // 0
console.log(valueInNumberFour); // NaN

// ***** Boolean Conversions ***** //

// Converting different values to boolean
// let isLogedIn = 1; // Uncomment to test: This would convert to true
// let isLogedIn = ""; // Uncomment to test: This would convert to false
let isLogedIn = "ahmed"; // A non-empty string converts to true

let booleanIsLogedIn = Boolean(isLogedIn); // Converts the value to a boolean

// Logging the result of boolean conversion
console.log(booleanIsLogedIn); // true for "ahmed", false for "", true for 1

// ***** String Conversion ***** //

let someNumber = 35; // A numeric value
let stringSomeNumber = String(someNumber); // Converts the number to a string

// Logging the results of string conversion
console.log(stringSomeNumber); // "35" - the number as a string
console.log(typeof stringSomeNumber); // string