// ***** Conversions ***** //
let score = "35"

let scoretwo = "35ABC"

let scorethree = null

let scorefour = undefined



console.log(typeof score)
console.log(typeof (score))
console.log(scorethree)
console.log(scorefour)

let valueInNumber = Number(score)
let valueInNumberTwo = Number(scoretwo)
let valueInNumberThree = Number(scorethree)
let valueInNumberFour = Number(scorefour)

console.log(valueInNumber)
console.log(valueInNumberTwo)
console.log(valueInNumberThree)
console.log(valueInNumberFour)

// "35" => 35
// "35abc" => NaN
// true => 1; false => 0


// let isLogededIn = 1
// let isLogededIn = ""
let isLogededIn = "ahmed"

let booleanIsLogedIn = Boolean (isLogededIn)

console.log(booleanIsLogedIn)

// 1 => true; 0 => false
// "" => false; 
// "ahmed" => true


let someNumber = 35
let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)