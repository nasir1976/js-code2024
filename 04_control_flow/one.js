const score = 200;

if (score > 300) {
    let power = "Fly";
    console.log(`Welcome, You can ${power}`)
}else {
    let power = "Try Again"
    console.log(`Sorry, ${power}`)
}

console.log("Thanks")


const balance = 1000;

if (balance > 500) console.log(`Yes, current balane1 is ${balance}`);

if (balance > 500) console.log(`Yes, current balane2 is ${balance}`),
console.log(`Yes, current balane3 is ${balance}`);

if (balance < 500) {
    console.log("less then 500");
} else if (balance < 750) {
    console.log("less then 750");
} else if (balance < 900) {
    console.log("less then 900");
} else {
    console.log("less then 1200");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInWithEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy coures")
}

if (loggedInFromGoogle || loggedInWithEmail && debitCard){
    console.log("Allow to buy coures 2")
}






