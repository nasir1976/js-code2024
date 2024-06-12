// Object with key-value pairs
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

// for...in loop iterating over the keys of an object
for (const key in myObject) {
    console.log(`${key} short cut for ${myObject[key]}`);  // Logs each key and its corresponding value
}

// Array with programming language shortcuts
const programming = ["js", "rb", "py", "swift", "cpp"];

// for...in loop iterating over the indices of an array
for (const key in programming) {
    console.log(programming[key]);  // Logs each element in the array using its index
}
