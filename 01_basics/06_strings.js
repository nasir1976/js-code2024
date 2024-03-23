const name = "ahmed-khan"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`His name ${name} age ${repoCount}`);

const gameName = new String("ahmed-khan");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 3);

const newStringA = gameName.substring(1, 3);

const anOtherString = gameName.slice(-6, 4);

console.log(newString)
console.log(newStringA)
console.log(anOtherString)

const newStringOne = "   Ahmed "
const newStringTwo = "  Ahmed-Khan-"

console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringTwo.replace('-', '_').trim())

console.log(gameName.split('-'))
