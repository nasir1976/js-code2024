// Basic Functions
function sayMyName(){
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("E");
    console.log("D");
}
// Prints the letters of the name "AHMED" vertically.


// Function to Add Numbers
function addTwoNubmer1(number1, number2){
    console.log(number1 + number2);  // Outputs 6 (4 + 2)
}
addTwoNubmer1(4, 2);

function addTwoNubmer2(number1, number2){
    console.log(number1 + number2);  // Outputs "42" due to type coercion (string concatenation)
}
addTwoNubmer2(4, "2");



function addTwoNubmer3(number1, number2){
    console.log(number1 + number2);  // Outputs 4 because null is coerced to 0
}
addTwoNubmer3(4, null);



function addTwoNubmer4(number1, number2) {
    console.log(number1 + number2);  // Outputs 9
}
const result = addTwoNubmer4(4, 5);  // 'result' is undefined because function doesn't return a value
console.log(result);  // Outputs 'undefined'



function addTwoNubmer5(number1, number2) {
    let result2 = number1 + number2;
    return result2;
}
const result2 = addTwoNubmer5(9, 6);  // Proper use of return, outputs 15
console.log("Result is:", result2);



function addTwoNubmer6(number1, number2){
    return number1 + number2;
}
const result3 = addTwoNubmer6(8, 9);  // Proper use of return, outputs 17
console.log("Result is:", result3);



// Functions with Usernames
function loginUserMessage(usename){
    return `${usename} just logged in`;
}
console.log(loginUserMessage("Ahmed"));  // Outputs "Ahmed just logged in"



function loginUserMessage2(usename){
    if(usename === undefined){
        console.log("Please enter a username");
        return;  // Exits the function if no username is provided
    }
    return `${usename} just logged in`;
}
console.log(loginUserMessage2());  // Logs error message, and undefined is implicitly returned



function loginUserMessage3(usename){
    if(!usename){
       console.log("Please enter a username");
       return;
    }
    return `${usename} just logged in`;
}
console.log(loginUserMessage3("Ahmed Khan"));  // Outputs "Ahmed Khan just logged in"



function loginUserMessage4(usename = "guest"){
    if(!usename){
       console.log("Please enter a username");
       return;
    }
    return `${usename} just logged in`;
}
console.log(loginUserMessage4());  // Uses default parameter, outputs "guest just logged in"




// Handling Objects and Arrays

const user = {
    usename: "Ahmed",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usename} price is ${anyobject.price}`);
}
handleObject(user);  // Outputs "Username is Ahmed price is 199"



function handleObject2(anyobject){
    console.log(`Username is ${anyobject.usename} price is ${anyobject.price}`);
}
handleObject2({usename: "Khan", price: 299});  // Outputs "Username is Khan price is 299"



const myNewArray = [200, 300, 500, 100];
function returnSecondValue(getArray){
    return getArray[2];  // Returns the third element of the array
}
console.log(returnSecondValue(myNewArray));  // Outputs 500


// Functions with Variable Arguments
function calculateCartPrice(getPrice){
    return getPrice;
}
console.log(calculateCartPrice(200, 100, 540));  // Only returns 200, ignores other values



function calculateCartPrice2(...getPrice){
    return getPrice;
}
console.log(calculateCartPrice2(200, 100, 540));  // Returns [200, 100, 540], using rest parameters
