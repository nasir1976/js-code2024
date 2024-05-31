// Simple for loop example
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);  // Logs numbers from 0 to 9
}

// For loop with a conditional check
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("This element 5");  // Special message when element is 5
    }
    console.log(element);  // Logs numbers from 0 to 10
}

// Nested for loop example
for (let i = 1; i <= 2; i++) {
    console.log(`Outer loop value ${i}`);  // Logs the value of the outer loop
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i * j);  // Logs multiplication table for each outer loop value
    }
}

// Iterating over an array using a for loop
const myArray = ["superman", "flash", "thor"];

console.log(myArray.length);  // Logs the length of the array (3)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);  // Logs each element in the array
}

// For loop with break statement
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`${index} is Detected`);  // Logs a message when index is 5
        break;  // Exits the loop when index is 5
    }
    console.log(index);  // Logs numbers from 1 to 4
}

// For loop with continue statement
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`${index} is Detected`);  // Logs a message when index is 5
        continue;  // Skips the rest of the loop iteration when index is 5
    }
    console.log(index);  // Logs numbers from 1 to 20, except 5
}
