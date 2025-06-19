
// Reference https://www.codecademy.com/resources/docs/javascript/arrays

let myArray = [1, 2, 3, 4, 5];

myArray.push(6); // Adds 6 to the end of the array

myArray.unshift(0); // Adds 0 to the beginning of the array

console.log("Array after push and unshift:", myArray);

myArray.pop(); // Removes the last element (6) from the array

myArray.shift(); // Removes the first element (0) from the array

console.log("Array after pop and shift:", myArray);

// Finding the length of the array
const arrayLength = myArray.length;
console.log(`The length of the array is: ${arrayLength}`);

// Finding the index of the number 3 in the array
const indexOfThree = myArray.indexOf(3);
console.log(`The index of 3 in the array is: ${indexOfThree}`);

// Finding the last index of the number 3 in the array
const lastIndexOfThree = myArray.lastIndexOf(3);

console.log(`The last index of 3 in the array is: ${lastIndexOfThree}`);

// Replacing the number 4 with 10 in the array
const replacedArray = myArray.map(num => num === 4 ? 10 : num);
console.log(replacedArray);

myArray.slice();
console.log(myArray);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfWeek.splice(0, 2, 'Saturday', 'Sunday');

console.log(daysOfWeek);
