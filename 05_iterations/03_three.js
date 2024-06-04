// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(`Value is:- ${num}`) 
}


const greetings = ["Hello World", "Ahmed"]

for (const greet of greetings) {
    console.log(`Greetings is:- ${greet}`)
    
}


const greetings2 = "Hello World"

for (const greet of greetings2) {
    console.log(`Greetings is:- ${greet}`)
    
}




// Map

const map = new Map()

map.set('IN', 'INDIA'),
map.set('FR', 'FRANCE'),
map.set('ES', 'SPAIN')

console.log(map)


for (const [key, value] of map) {
    console.log(key,  ':- ', value)
}