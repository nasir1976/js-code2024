// For...of loop iterating over an array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(`Value is:- ${num}`);  // Logs each value in the array
}

// For...of loop iterating over an array of strings
const greetings = ["Hello World", "Ahmed"];

for (const greet of greetings) {
    console.log(`Greetings is:- ${greet}`);  // Logs each greeting in the array
}

// For...of loop iterating over a string
const greetings2 = "Hello World";

for (const greet of greetings2) {
    console.log(`Greetings is:- ${greet}`);  // Logs each character in the string
}

// Map example
const map = new Map();

// Adding key-value pairs to the map
map.set('IN', 'INDIA');
map.set('FR', 'FRANCE');
map.set('ES', 'SPAIN');

console.log(map);  // Logs the entire map

// For...of loop iterating over the map
for (const [key, value] of map) {
    console.log(key, ':- ', value);  // Logs each key-value pair in the map
}
