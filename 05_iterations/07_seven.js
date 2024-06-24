// An array of numbers from 1 to 10
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to create a new array where each number is increased by 10
const newNumber = myNumbers.map((num) => num + 10);
console.log(newNumber); // Logs [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Another array of numbers from 1 to 10
const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a series of map and filter methods to transform the array
const newNums2 = myNumbers2
  .map((num) => num * 10) // Multiplies each number by 10
  .map((num) => num + 1)  // Adds 1 to each resulting number
  .filter((num) => num >= 40); // Filters out numbers less than 40

console.log(newNums2); // Logs [41, 51, 61, 71, 81, 91, 101]



