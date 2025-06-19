// This page demonstrates string manipulation in JS using ES6 template literals.

const stringManipulation = "My favorite color is BLUE!";

// Converting the string to uppercase and logging it
console.log(`${stringManipulation.toUpperCase()} is my favorite color!`);

// Converting the string to lowercase and logging it
const stringManipulationLower = stringManipulation.toLowerCase();
console.log(`${stringManipulationLower} is my favorite color!`);

// Finding the length of the string and logging it
const stringManipulationLength = stringManipulation.length;
console.log(`The length of the string is: ${stringManipulationLength}`);

// Finding the index of the letter 'l' in the string and logging it
const indexOfL = stringManipulation.indexOf('l');
console.log(`The index of 'l' in the string is: ${indexOfL}`);

// Finding the last index of the letter 'l' in the string and logging it
const lastIndexOfL = stringManipulation.lastIndexOf('l');
console.log(`The last index of 'l' in the string is: ${lastIndexOfL}`);

// Replacing the word 'BLUE' with 'RED' and logging it
const replacedString = stringManipulation.replace('BLUE', 'RED');
console.log(`After replacing 'BLUE' with 'RED': ${replacedString}`);

// Splitting the string into an array of words and logging it.
const splitString = stringManipulation.split(' ');
console.log("The string split into an array of words: ", splitString);
