// Define an object called user with properties username, price, and a method welcomeMessage
const user = {
    username: "Ahmed",
    price: 999,
    // Method to print a welcome message including the username
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// Call the welcomeMessage method of the user object
user.welcomeMessage(); // Output: Ahmed, welcome to website

// Change the value of the username property of the user object
user.username = "Ali";

// Call the welcomeMessage method again to see the updated username
user.welcomeMessage(); // Output: Ali, welcome to website

// Function declaration cafe() prints 'this', referring to the global object
function cafe() {
    console.log(this);
}

// Call the cafe function
cafe(); // Output: Window {...} (In a browser environment)

// Function declaration cafe2() prints the value of this.username, which is undefined
function cafe2() {
    username: "Ahmed"; // This line doesn't do anything, it's not a property assignment
    console.log(this.username);
}

// Call the cafe2 function
cafe2(); // Output: undefined

// cafe3 is a function expression which behaves similar to cafe2
const cafe3 = function () {
    username: "Ahmed"; // Same as cafe2, this line doesn't do anything
    console.log(this.username);    
}

// Call the cafe3 function
cafe3(); // Output: undefined

// cafe4 is an arrow function which prints this.username, but since arrow functions don't bind 'this', it prints undefined
const cafe4 = () => {
    username: "Ahmed"; // Same issue as cafe2 and cafe3
    console.log(this.username);     
}

// Call the cafe4 function
cafe4(); // Output: undefined

// Define a function addTwoNum which takes two parameters and returns their sum
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}

// Call the addTwoNum function with arguments 3 and 4
console.log(addTwoNum(3,4)); // Output: 7

// addTwoNum2 is a shorter version of addTwoNum, using implicit return
const addTwoNum2 = (num1, num2) => num1 + num2;

// Call the addTwoNum2 function with arguments 4 and 5
console.log(addTwoNum2(4,5)); // Output: 9

// addTwoNum3 is another way of writing addTwoNum using parentheses around the expression
const addTwoNum3 = (num1, num2) => (num1 + num2);

// Call the addTwoNum3 function with arguments 5 and 6
console.log(addTwoNum3(5,6)); // Output: 11

// addTwoNum4 is a faulty arrow function, it doesn't return an object as intended
const addTwoNum4 = (num1, num2) => {username: "Ahmed"};

// Call the addTwoNum4 function with arguments 5 and 6
console.log(addTwoNum4(5,6)); // Output: undefined

// addTwoNum5 is a correct version of addTwoNum4, it returns an object using parentheses
const addTwoNum5 = (num1, num2) => ({username: "Ahmed"});

// Call the addTwoNum5 function with arguments 5 and 6
console.log(addTwoNum5(5,6)); // Output: {username: "Ahmed"}
