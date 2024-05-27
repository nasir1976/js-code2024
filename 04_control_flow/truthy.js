// Initialize userEmail variable with a non-empty string
const userEmail = "email@domain.com";

// Check if userEmail is truthy
if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Initialize userEmail2 variable with an empty string
const userEmail2 = "";

// Check if userEmail2 is truthy
if (userEmail2){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Initialize userEmail3 variable with an empty object
const userEmail3 = {};

// Check if userEmail3 is truthy
if (userEmail3){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Initialize userEmail4 variable with an empty array
const userEmail4 = [];

// Check if userEmail4 array length is 0
if (userEmail4.length === 0){
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}

// Initialize userEmail5 variable with an array containing an email string
const userEmail5 = ["email@domain.com"];

// Check if userEmail5 array length is 0
if (userEmail5.length === 0){
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}

// Initialize userEmail6 variable with an empty object
const userEmail6 = {};

// Check if userEmail6 object has no keys
if(Object.keys(userEmail6).length === 0){
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// Initialize userEmail7 variable with an object containing name and age properties
const userEmail7 = { name: "Ahamed", age: 32 };

// Check if userEmail7 object has no keys
if (Object.keys(userEmail7).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// List of falsy values in JavaScript
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// List of truthy values in JavaScript
// "0", " ", 'false', {}, [], function(){}

// Nullish Coalescing Operator (??) handles null and undefined

// Use nullish coalescing operator to assign val1
let val1;
val1 = 5 ?? 10; // 5 is not null or undefined, so val1 is 5
console.log(val1);

// Use nullish coalescing operator to assign val2
let val2;
val2 = 0 ?? 20; // 0 is not null or undefined, so val2 is 0
console.log(val2);

// Use nullish coalescing operator to assign val3
let val3;
val3 = undefined ?? 30; // undefined is nullish, so val3 is 30
console.log(val3);

// Use nullish coalescing operator with multiple values to assign val4
let val4;
val4 = null ?? undefined ?? 40 ?? 50; // both null and undefined are nullish, so val4 is 40
console.log(val4);

// Ternary Operator example

// Initialize iceTeaPrice variable
const iceTeaPrice = 100;

// Use ternary operator to check if iceTeaPrice is less than or equal to 80
iceTeaPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is more than 80");
