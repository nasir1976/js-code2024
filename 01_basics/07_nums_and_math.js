// Declaring a primitive number
const score = 400;

// Creating `Number` objects
const balance = new Number(500);

const otherBalance = new Number(232.5543);
const otherBalanceTwo = 384522205;
const otherBalanceThree = 384522205;
const otherBalanceFour = 384522205;
const otherBalanceFive = 384522205;

// Displaying numbers
console.log(score); // 400
console.log(balance); // [Number: 500]

// Getting the length of the number as a string
console.log(balance.toString().length); // 3

// Formatting the number to a fixed number of decimal places
console.log(balance.toFixed(2)); // "500.00"

// Formatting the number to a specified precision
console.log(otherBalance.toPrecision(5)); // "232.55"
console.log(otherBalance.toPrecision(4)); // "232.6"

// Displaying numbers with locale-specific representations
console.log(otherBalanceTwo.toLocaleString()); // "384,522,205" (format may vary based on locale)
console.log(otherBalanceThree.toLocaleString('en-IN')); // "38,45,22,205"
console.log(otherBalanceFour.toLocaleString('fr-FR')); // "384 522 205"
console.log(otherBalanceFive.toLocaleString('en-PK')); // "384,522,205"



// +++++++ Math Operations +++++++ //
// Using Math object for mathematical calculations

// Getting the absolute value
console.log(Math.abs(-4)); // 4

// Rounding numbers
console.log(Math.round(4.65)); // 5
console.log(Math.ceil(4.65)); // 5
console.log(Math.floor(4.65)); // 4

// Calculating square root
console.log(Math.sqrt(25)); // 5

// Finding the maximum and minimum in a list of numbers
console.log(Math.max(2, 4, 1, 6, 8)); // 8
console.log(Math.min(2, 4, 1, 6, 8)); // 1

// Generating random numbers
console.log(Math.random()); // Random number between 0 (inclusive) and 1 (exclusive)

// Generating random numbers within a specific range
console.log(Math.random() * 10 + 1); // Random number between 1 and 11 (not including 11)
console.log((Math.random() * 10) + 1); // Same as above

// Generating a random integer within a specific range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Random integer between 10 and 20, inclusive

// More examples of generating random numbers within specific ranges
console.log((Math.random() * 10) + 11); // Random number between 11 and 21 (not including 21)
console.log(Math.floor(Math.random() * 10) + 11); // Random integer between 11 and 20, inclusive