// Dates 

// Initialize a Date object
const myDate = new Date();

// Logging the Date object directly
console.log(myDate);

// Converting the date to a string using the toString method
console.log(myDate.toString());

// Getting a more readable date string without the time
console.log(myDate.toDateString());

// Getting the current minutes from the Date object
console.log(myDate.getMinutes());

// Getting the locale-specific date representation
console.log(myDate.toLocaleDateString());

// Getting the locale-specific date and time representation
console.log(myDate.toLocaleString());

// Getting the ISO string representation of the Date object
console.log(myDate.toISOString());
