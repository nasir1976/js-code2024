// An array of numbers
const myNums = [1, 2, 3, 10];

// Using reduce to sum up the numbers in the array
const myTotal = myNums.reduce(function(acc, curValue) {
    // Logging the accumulator and current value in each iteration
    console.log(`Acc: ${acc} and Val: ${curValue}`);
    return acc + curValue; // Adding the current value to the accumulator
}, 0); // Initial value of the accumulator is 0

console.log(myTotal); // Logs 16 (1 + 2 + 3 + 10)

// Using reduce with arrow function syntax to sum up the numbers in the array
const myTotal2 = myNums.reduce((acc, curValue) => acc + curValue, 0);
console.log(myTotal2); // Logs 16 (1 + 2 + 3 + 10)

// An array of objects representing items in a shopping cart
const shoppingCart = [
    {
        "Item": "Javascript",
        "price": 999
    },
    {
        "Item": "Python",
        "price": 2999
    },
    {
        "Item": "Adobe",
        "price": 1000
    }
];

// Using reduce to sum up the prices of items in the shopping cart
const myShopping = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(myShopping); // Logs 4998 (999 + 2999 + 1000)


