function sayMyName(){
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("E");
    console.log("D");   
}

// sayMyName()

function addTwoNubmer1(number1, number2){
    console.log(number1 + number2);
}
addTwoNubmer1(4,2)



function addTwoNubmer2(number1, number2){
    console.log(number1 + number2);
}
addTwoNubmer2(4,"2")


function addTwoNubmer3(number1, number2){
    console.log(number1 + number2);
}
addTwoNubmer3(4, null)


function addTwoNubmer4(number1, number2) {
    console.log(number1 + number2);
}
const result = addTwoNubmer4(4,5);
console.log(result)


function addTwoNubmer5(number1, number2) {
    let result2 = number1 + number2;
    return result2
}
const result2 = addTwoNubmer5(9,6);
console.log("Result is:", result2)


function addTwoNubmer6(number1, number2){
    return number1 + number2
}
const result3 = addTwoNubmer6(8, 9);
console.log("Result is:", result3)


function loginUserMessage(usename){
    return `${usename} just logged in`;
}
console.log(loginUserMessage("Ahmed"))


function loginUserMessage2(usename){
    if(usename === undefined){
        console.log("Please enter a username");
        return
    }
    return `${usename} just logged in`
}
console.log(loginUserMessage2())



function loginUserMessage3(usename){
    if(!usename){
       console.log("Please entre a username")
       return
    }
    return `${usename} just logged in`;
}
console.log(loginUserMessage3("Ahmed Khan"))



function loginUserMessage4(usename = "guest"){
    if(!usename){
       console.log("Please entre a username")
       return
    }
    return `${usename} just logged in`;
}
console.log(loginUserMessage4())