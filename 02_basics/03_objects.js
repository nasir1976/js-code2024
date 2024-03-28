// singleton


// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ahmed",
    "full name": "Ahmed Khan",
    age: 18,
    [mySym]: "mykey1",
    email: "ahmed@google.com",
    location: "Lahore",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday", "Friday",]
}
console.log(jsUser.age)
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "ahmed@hotmail.com"

console.log(jsUser["email"])

// Object.freeze(jsUser)

jsUser.email = "ahmed@gmail.com"

console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS user ")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(jsUser.greeting)

console.log(jsUser.greetingTwo())