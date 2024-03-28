// Creating and Accessing Object Properties

const mySym = Symbol("key1");

const jsUser = {
    name: "Ahmed",
    "full name": "Ahmed Khan",
    age: 18,
    [mySym]: "mykey1",
    email: "ahmed@google.com",
    location: "Lahore",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday", "Friday",]
};

// Accessing object properties
console.log(jsUser.age); // 18
console.log(jsUser["name"]); // "Ahmed"
console.log(jsUser["full name"]); // "Ahmed Khan"
console.log(jsUser[mySym]); // "mykey1"



// Modifying Object Properties
// Modifying an object property
jsUser.email = "ahmed@hotmail.com";
console.log(jsUser["email"]); // "ahmed@hotmail.com"

// Attempt to change email again
jsUser.email = "ahmed@gmail.com";
console.log(jsUser.email); // "ahmed@gmail.com"


// Object Methods
// Adding methods to the object
jsUser.greeting = function() {
    console.log("Hello JS user");
};

jsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
};

// Since jsUser.greeting is a function, logging it will show the function definition
console.log(jsUser.greeting);

// Calling the method
jsUser.greetingTwo(); // "Hello JS user Ahmed"





