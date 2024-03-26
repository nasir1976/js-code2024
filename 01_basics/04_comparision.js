// Comparison operations with numbers (uncomment to see results)
// console.log(2 > 1); // true, because 2 is greater than 1
// console.log(2 >= 1); // true, because 2 is greater than or equal to 1
// console.log(2 < 1); // false, because 2 is not less than 1
// console.log(2 <= 1); // false, because 2 is not less than or equal to 1
// console.log(2 == 1); // false, because 2 is not equal to 1
// console.log(2 != 1); // true, because 2 is not equal to 1

// Comparing strings to numbers, demonstrating type coercion in comparisons
console.log("2" > 1); // true, string "2" is converted to number and compared
console.log("02" > 1); // true, string "02" is converted to number 2 and compared

// Comparisons involving null
console.log(null > 0); // false, null is not greater than 0
console.log(null > "0"); // false, null is not greater than 0 after type coercion
console.log(null >= "0"); // true, because null is considered equal to 0 in non-strict comparison

console.log(null < 1); // true, null is considered less than 1
console.log(null < "1"); // true, null is considered less than 1 after type coercion
console.log(null == 0); // false, null is loosely equal only to undefined

// Comparisons involving undefined
console.log(undefined > 0); // false, undefined is not greater than 0
console.log(undefined == 0); // false, undefined is loosely equal only to null

// Loose vs Strict equality comparisons
console.log("2" == 2); // true, because of type coercion ("2" becomes 2)
console.log("2" === 2); // false, because the types are different (string vs number)
