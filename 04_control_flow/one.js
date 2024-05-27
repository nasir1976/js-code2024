// Initialize score variable
const score = 200;

// Check if the score is greater than 300
if (score > 300) {
    // If true, assign "Fly" to power and log a welcome message
    let power = "Fly";
    console.log(`Welcome, You can ${power}`);
} else {
    // If false, assign "Try Again" to power and log a sorry message
    let power = "Try Again";
    console.log(`Sorry, ${power}`);
}

// Log a thank you message regardless of the score
console.log("Thanks");

// Initialize balance variable
const balance = 1000;

// Check if balance is greater than 500 and log the balance if true
if (balance > 500) console.log(`Yes, current balance1 is ${balance}`);

// The comma operator separates two expressions, both will be executed
if (balance > 500) console.log(`Yes, current balance2 is ${balance}`),
console.log(`Yes, current balance3 is ${balance}`);

// Check balance against multiple thresholds and log the corresponding message
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// Initialize user login status variables
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInWithEmail = true;

// Check if the user is logged in, has a debit card, and if 2 equals 2 (always true)
if (userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
}

// Check if the user is logged in from Google or with email and has a debit card
if (loggedInFromGoogle || (loggedInWithEmail && debitCard)){
    console.log("Allow to buy course 2");
}







