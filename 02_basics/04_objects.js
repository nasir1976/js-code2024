// Creating and Modifying Objects
// Creating an object and adding properties to it
const tindersUser = {}; // An empty object
tindersUser.id = "123abc";
tindersUser.name = "Ahmed";
tindersUser.isLoggedIn = false;

console.log(tindersUser); // { id: '123abc', name: 'Ahmed', isLoggedIn: false }


// Nested Object Access
// Working with nested objects
const regularUser = {
    email: "ahmed@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ahmed",
            lastname: "Khan",
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname); // "Ahmed"


// Combining Objects
// Demonstrating different ways to combine objects
const obj1 = {1: "A", 2: 'B'};
const obj2 = {3: "C", 4: 'D'};

// Attempt to nest obj1 and obj2 within obj3
const obj3 = {obj1, obj2}; // Creates an object with obj1 and obj2 as properties, not what we usually want for combining

// Combining obj1 and obj2 properties into obj1
const obj4 = Object.assign(obj1, obj2);

// Creating a new object combining obj1 and obj2, without modifying them
const obj5 = Object.assign({}, obj1, obj2);

// Using the spread operator to combine obj1 and obj2 into a new object
const obj6 = {...obj1, ...obj2};

console.log(obj3); // { obj1: { 1: 'A', 2: 'B' }, obj2: { 3: 'C', 4: 'D' } }
console.log(obj4); // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
console.log(obj5); // Same as obj4
console.log(obj6); // Same as obj4


// Working with Arrays of Objects
// Demonstrating an array of objects
const users = [
    {},
    {},
    { id: "1", email: "a@gmail.com" },
    { id: "2", email: "b@gmail.com" },
    { id: "3", email: "c@gmail.com" },   
];

console.log(users[3].email); // "b@gmail.com"



// Object Methods
// Using Object methods to work with object properties
console.log(Object.keys(tindersUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tindersUser)); // ['123abc', 'Ahmed', false]
console.log(Object.entries(tindersUser)); // [['id', '123abc'], ['name', 'Ahmed'], ['isLoggedIn', false]]

// Checking property existence
console.log(tindersUser.hasOwnProperty("isLoggedIn")); // true
console.log(tindersUser.hasOwnProperty("country")); // false



// Original Object
const course = {
    courseName: "JavaScript 2024",
    coursePrice: 999,
    courseInstructor: "Ahmed",
};


// Accessing Object Properties
console.log(course.courseName); // "JavaScript 2024"


// Object Destructuring
const {courseName, coursePrice, courseInstructor: instructor} = course;


// Logging Destructured Variables
console.log(courseName); // "JavaScript 2024"
console.log(coursePrice); // 999
console.log(instructor); // "Ahmed"