// Declaring a constant for account ID - this value cannot be changed later
const accountId = 144553;

// Declaring variables for account details with let for block scope
let accountEmail = "ahmed@gmail.com"; // Initial email
let accountPassword = "123456"; // Initial password

// Implicit global variable declaration (not recommended, better to use 'let' or 'const')
// In strict mode, this would cause an error: 'accountCity is not defined'
accountCity = "Lahore";

// Declaring a variable without initializing (its value will be undefined)
let accountState;

// Trying to reassign a value to a const variable (uncommenting the below line will throw an error)
// accountId = 223344; // not possible to change

// Reassigning new values to account details
accountEmail = "asif@gmail.com"; // Updated email
accountPassword = "abcdef"; // Updated password
accountCity = "Karachi"; // Updated city

// Logging the accountId to the console
console.log(accountId);

// Advice against using 'var' is noted, highlighting issues with block scope and function scope
/*
Prefer not to use var because of issues in block scope and functional scope
*/

// Using console.table to properly display the information in a table format
// Wrapping the variables in an object to correctly format them for console.table
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });
