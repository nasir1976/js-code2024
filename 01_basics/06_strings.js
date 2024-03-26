// String concatenation and template literals
const name = "ahmed-khan";
const repoCount = 50;

// Concatenating strings and numbers, automatically converting numbers to strings
console.log(name + repoCount + " Value"); // Outputs "ahmed-khan50 Value"

// Using template literals for more readable string interpolation
console.log(`His name ${name} age ${repoCount}`); // Outputs "His name ahmed-khan age 50"

// Working with String objects
const gameName = new String("ahmed-khan");

// Accessing characters in a string
console.log(gameName[0]); // Outputs "a"

// Accessing the prototype of the String object
console.log(gameName.__proto__); // Outputs the prototype object of String

// Getting the length of the string
console.log(gameName.length); // Outputs 10

// Converting the string to uppercase
console.log(gameName.toUpperCase()); // Outputs "AHMED-KHAN"

// Accessing a character at a specific position
console.log(gameName.charAt(2)); // Outputs "m"

// Finding the index of a character in the string
console.log(gameName.indexOf('h')); // Outputs 1

// Extracting a substring from the string
const newString = gameName.substring(0, 3); // "ahm"
const newStringA = gameName.substring(1, 3); // "hm"

// Slicing a string (note that the negative start index doesn't work as expected in slice)
const anOtherString = gameName.slice(-6, 4); // "" (due to the way negative start is treated in slice)

console.log(newString); // "ahm"
console.log(newStringA); // "hm"
console.log(anOtherString); // ""

// Trimming and replacing characters in strings
const newStringOne = "   Ahmed ";
const newStringTwo = "  Ahmed-Khan-";

console.log(newStringOne); // "   Ahmed "
console.log(newStringOne.trim()); // "Ahmed"
console.log(newStringTwo.replace('-', '_').trim()); // "Ahmed_Khan-"

// Splitting a string into an array based on a delimiter
console.log(gameName.split('-')); // ["ahmed", "khan"]