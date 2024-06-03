// While loop example
let index = 0;
while (index <= 5) {
    console.log(`Value of index ${index}`);  // Logs the current value of index
    index = index + 2;  // Increments index by 2
}

// While loop iterating over an array
let myArray = ["superman", "flash", "thor"];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value of Hero is: ${myArray[arr]}`);  // Logs each element in the array
    arr = arr + 1;  // Increments arr by 1
}

// Do...while loop example
let score = 1;

do {
    console.log(`Score is: ${score}`);  // Logs the current value of score
    score++;  // Increments score by 1
} while (score <= 10);  // Continues looping while score is less than or equal to 10

// Do...while loop that runs once
let scoretwo = 11;

do {
    console.log(`Score is: ${scoretwo}`);  // Logs the current value of scoretwo
    scoretwo++;  // Increments scoretwo by 1
} while (scoretwo <= 10);  // The condition is false, but the loop runs once


