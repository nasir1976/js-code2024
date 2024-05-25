// Define a function named cafe that logs "Database Connected" to the console
function cafe(){
    console.log("Database Connected");
}

// Call the cafe function
cafe(); // Output: Database Connected

// Define an immediately invoked function expression (IIFE) named cafe2 that logs "Database Connected Two"
(function cafe2(){
    console.log("Database Connected Two");
})(); // Output: Database Connected Two

// Define an immediately invoked arrow function expression that takes a parameter 'name' and logs a message with that name
( (name) => {
    console.log(`Database Connected Three ${name}`);
})("Ahmed"); // Output: Database Connected Three Ahmed
