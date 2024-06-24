// An array of different programming languages
const coding = ["js", "cpp", "java", "ruby", "python", "swift"];

// Using forEach to iterate over the array and log each item to the console
const value = coding.forEach((item) => {
  console.log(item); // Logs each programming language
  return item; // The return statement here doesn't affect the forEach method
});

console.log(value); // Logs undefined because forEach always returns undefined

// An array of numbers from 1 to 10
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with numbers greater than 4
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // Logs [5, 6, 7, 8, 9, 10]

// Another array of numbers from 1 to 10
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter with a return statement to create a new array with numbers greater than 4
const newNums2 = myNums2.filter((num) => {
  return num > 4;
});
console.log(newNums2); // Logs [5, 6, 7, 8, 9, 10]

// Another array of numbers from 1 to 10
const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Creating an empty array to store numbers greater than 4
const newNums3 = [];

// Using forEach to iterate over the array and push numbers greater than 4 to newNums3
myNums3.forEach((num) => {
  if (num > 4) {
    newNums3.push(num);
  }
});
console.log(newNums3); // Logs [5, 6, 7, 8, 9, 10]

// An array of top movies with their names, ratings (stars), and release years
const topMovies = [
  {
    name: "The Shawshank Redemption",
    stars: 9.3,
    year: 1994
  },
  {
    name: "The Godfather",
    stars: 9.2,
    year: 1972
  },
  {
    name: "The Dark Knight",
    stars: 9.0,
    year: 2008
  },
  {
    name: "The Godfather Part II",
    stars: 9.0,
    year: 1974
  },
  {
    name: "12 Angry Men",
    stars: 9.0,
    year: 1957
  },
  {
    name: "Schindler's List",
    stars: 8.9,
    year: 1993
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    stars: 8.9,
    year: 2003
  },
  {
    name: "Pulp Fiction",
    stars: 8.9,
    year: 1994
  },
  {
    name: "The Good, the Bad and the Ugly",
    stars: 8.8,
    year: 1966
  },
  {
    name: "Fight Club",
    stars: 8.8,
    year: 1999
  }
];

// Using filter to create a new array with movies released after 1998 and with a rating of 8.9 or higher
const userMovies = topMovies.filter((movie) => movie.year >= 1999 && movie.stars >= 8.9);

console.log(userMovies); // Logs movies that meet the criteria




