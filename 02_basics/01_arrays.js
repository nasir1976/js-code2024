// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5]; // Literal notation
const myHeros = ["Shaktiman", "Naagraj"]; // Array of strings

const myArr2 = new Array(1, 2, 3, 4); // Constructor notation

// Accessing array elements
console.log(myArr[0]); // 0

// Array methods

// Adding elements
myArr.push(6); // Adds 6 to the end
myArr.push(7); // Adds 7 to the end

console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

// Removing the last element and storing it
const removePop = myArr.pop(); // Removes the last element (7)

// Adding an element to the beginning
myArr.unshift(8); // Adds 8 to the start

// Removing the first element
myArr.shift(); // Removes the first element (8 now, was 0 before)

console.log(myArr); // [1, 2, 3, 4, 5, 6]
console.log(removePop); // 7
console.log(myArr.includes(5)); // true
console.log(myArr.includes(11)); // false
console.log(myArr.indexOf(3)); // 2

// Joining array elements into a string
const newArr = myArr.join(); // Joins elements into a string, comma-separated by default
console.log(newArr); // "1,2,3,4,5,6"

// Demonstrating slice and splice

console.log("A ", myArr); // [1, 2, 3, 4, 5, 6]
const myn1 = myArr.slice(1, 3); // Creates a new array from a segment of myArr

console.log(myn1); // [2, 3] - slice does not modify the original array
console.log("B", myArr); // [1, 2, 3, 4, 5, 6] - original array is unchanged

const myn2 = myArr.splice(1, 3); // Removes elements from the array and returns them
console.log(myn2); // [2, 3, 4] - elements removed from myArr

console.log("C", myArr); // [1, 5, 6] - myArr after splice, showing it's modified
