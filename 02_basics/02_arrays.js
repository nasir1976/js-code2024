// Combining Arrays
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// Combining arrays using the spread operator
const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros); // Outputs all heroes from both arrays


// Nested Arrays and Flattening
const anOtherArray = [1, 2, 3, 4, [11, 12], 21, [31, 32, 33, 34, [41, 42]]];
console.log(anOtherArray); // Shows the nested array structure

const realArray = anOtherArray.flat(1); // Flattens the array one level deep
console.log(realArray); // [1, 2, 3, 4, 11, 12, 21, 31, 32, 33, 34, [41, 42]]


// Checking if a Value is an Array
console.log(Array.isArray("Ahmed")); // false


// Creating Arrays from Strings or Objects
console.log(Array.from("Ahmed")); // ['A', 'h', 'm', 'e', 'd']

console.log(Array.from({Name: "Ahmed"})); // []


// Creating Arrays with Specific Elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
