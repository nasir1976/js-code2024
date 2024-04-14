//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}










// Global Scope
var globalVar = "I am a global variable";

function checkGlobalScope() {
    console.log(globalVar);  // Accessible here because it's globally scoped
}

checkGlobalScope(); // Output: I am a global variable
console.log(globalVar); // Output: I am a global variable

// Function Scope
function setFunctionScope() {
    var functionScopedVar = "I exist only inside this function";
    console.log(functionScopedVar); // Accessible here within the function
}

setFunctionScope(); // Output: I exist only inside this function
// console.log(functionScopedVar); // Error: functionScopedVar is not defined outside of the function

// Block Scope
function checkBlockScope() {
    if (true) {
        let blockScopedVar = "I am visible only in this block";
        const anotherBlockScopedVar = "So am I";
        console.log(blockScopedVar); // Accessible within the block
        console.log(anotherBlockScopedVar); // Accessible within the block
    }
    // console.log(blockScopedVar); // Error: blockScopedVar is not defined outside the block
    // console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined outside the block
}

checkBlockScope();
