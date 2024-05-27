const userEmail = "email@domain.com"

if (userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}


const userEmail2 = ""

if (userEmail2){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}


const userEmail3 = {}

if (userEmail3){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}



const userEmail4 = []

if (userEmail4.length === 0){
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}


const userEmail5 = ["email@domain.com"]

if (userEmail5.length === 0){
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}


const userEmail6 = {}

if(Object.keys(userEmail6).length === 0){
    console.log("Object is empty")
} else {
    console.log("Object is not empty")
}



const userEmail7 = { name: "Ahamed", age: 32 };

if (Object.keys(userEmail7).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// False
// false, 0, -0, "", BigInt 0n, null, undefined, NaN,

// Truthy values
// "0", " ", 'false', {}, [], function(){}


// Nullish Conslesing Operator (??): null, undefined


let val1
val1 = 5 ?? 10
console.log(val1)


let val2
val2 = 0 ?? 20
console.log(val2)

let val3
val3 = undefined ?? 30
console.log(val3)

let val4
val4 = null ?? undefined ?? 40 ?? 50
console.log(val4)


// Terniary Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price is less then 80"): console.log("Price is more then 80");
