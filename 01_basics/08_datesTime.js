// Creating a new Date object representing the current date and time
let myDate = new Date();

// Displaying the date in its default format
console.log(myDate);

// Converting the date to a string
console.log(myDate.toString());

// Getting a more human-readable date format (without time)
console.log(myDate.toDateString());

// Getting the current minutes
console.log(myDate.getMinutes());

// Getting the locale-specific date representation
console.log(myDate.toLocaleDateString());

// Getting the locale-specific date and time representation
console.log(myDate.toLocaleString());

// Getting the date in ISO format
console.log(myDate.toISOString());

// Checking the type of the date object
console.log(typeof myDate); // "object"

// Creating a new Date object for a specific date
let myCreatedDate = new Date(2024, 0, 23); // Note: Months are 0-indexed (0 = January)

// Displaying the specific date as a string
console.log(myCreatedDate.toDateString());

// Creating another Date object using a string
let myCreatedDateOne = new Date("2024-01-23");

// Displaying the date with locale-specific formatting
console.log(myCreatedDateOne.toLocaleString());

// Getting the current timestamp in milliseconds since the Unix epoch (January 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// Getting the timestamp of a specific date
console.log(myCreatedDate.getTime());

// Repeating Date.now() to demonstrate it returns the current timestamp
console.log(Date.now());

// Converting the timestamp to seconds (from milliseconds)
console.log(Date.now() / 1000);

// Rounding down to get a whole number of seconds
console.log(Math.floor(Date.now() / 1000));

// Creating another new Date object for demonstration
let newDate = new Date();

// Getting the current month (note: 0-indexed, so January = 0)
console.log(newDate.getMonth());

// Displaying the current day of the week in a long format (e.g., "Monday")
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));




