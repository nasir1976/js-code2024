// forEach loop with an anonymous function
const coding = ["js", "cpp", "java", "ruby", "python", "swift"];

coding.forEach(function (val) {
    console.log(val);  // Logs each value in the array
});

// forEach loop with an arrow function
const codingA = ["js", "cpp", "java", "ruby", "python", "swift"];

codingA.forEach((item) => {
    console.log(item);  // Logs each item in the array
});

// forEach loop with a named function
const codingB = ["js", "cpp", "java", "ruby", "python", "swift"];

function printMe(item) {
    console.log(item);  // Logs the item passed to the function
}
codingB.forEach(printMe);  // Calls printMe for each item in the array

// forEach loop with an arrow function accessing item, index, and array
const codingC = ["js", "cpp", "java", "ruby", "python", "swift"];

codingC.forEach((item, index, arr) => {
    console.log(item, index, arr);  // Logs each item, its index, and the entire array
});

// forEach loop iterating over an array of objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);  // Logs the languageName property of each object
});
