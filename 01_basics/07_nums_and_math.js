const score = 400

const balance = new Number(500)

const otherBalance = new Number(232.5543)
const otherBalanceTwo = 384522205
const otherBalanceThree = 384522205
const otherBalanceFour = 384522205
const otherBalanceFive = 384522205

console.log(score)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2))

console.log(otherBalance.toPrecision(5))

console.log(otherBalance.toPrecision(4))

console.log(otherBalanceTwo.toLocaleString())
console.log(otherBalanceThree.toLocaleString('en-IN'))
console.log(otherBalanceFour.toLocaleString('fr-FR'))
console.log(otherBalanceFive.toLocaleString('en-PK'))


// +++++++++++++++++++++ Math ++++++++++++++++++++++++

console.log(Math.abs(-4))

console.log(Math.round(4.65))
console.log(Math.ceil(4.65))
console.log(Math.floor(4.65))

console.log(Math.sqrt(25))

console.log(Math.max(2,4,1,6,8))
console.log(Math.min(2,4,1,6,8))

console.log(Math.random())

console.log(Math.random() * 10 + 1)
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))


console.log((Math.random() * 10) + 11)
console.log(Math.floor(Math.random() * 10) + 11)











