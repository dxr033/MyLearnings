// Create an array of an object of students
const students = [
  {
    marks: 88,
    total: 100,
    age: 18,
    fName: "Alice",
    lName: "Smith",
    student_id: "S001",
  },
  {
    marks: 25,
    total: 100,
    age: 19,
    fName: "Bob",
    lName: "Johnson",
    student_id: "S002",
  },
  {
    marks: 95,
    total: 100,
    age: 17,
    fName: "Charlie",
    lName: "Brown",
    student_id: "S003",
  },
  {
    marks: 85,
    total: 100,
    age: 18,
    fName: "Diana",
    lName: "Williams",
    student_id: "S004",
  },
  {
    marks: 90,
    total: 100,
    age: 20,
    fName: "Ethan",
    lName: "Jones",
    student_id: "S005",
  },
  {
    marks: 81,
    total: 100,
    age: 18,
    fName: "Fiona",
    lName: "Garcia",
    student_id: "S006",
  },
  {
    marks: 95,
    total: 100,
    age: 19,
    fName: "George",
    lName: "Martinez",
    student_id: "S007",
  },
  {
    marks: 87,
    total: 100,
    age: 17,
    fName: "Hannah",
    lName: "Lee",
    student_id: "S008",
  },
  {
    marks: 79,
    total: 100,
    age: 18,
    fName: "Ian",
    lName: "Walker",
    student_id: "S009",
  },
  {
    marks: 93,
    total: 100,
    age: 20,
    fName: "Julia",
    lName: "Hall",
    student_id: "S010",
  },
];
/*
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((value) => value * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]
*/
// 1. If marks are greater than 35 then add result as pass else if it is greater than 60 result equal
// to merit else if total is greater than 85 result will be high distinction.
// Assign result based on marks and total
const results = students.map((student) => {
  return student.marks > 85
    ? "high distinction"
    : student.marks > 60
    ? "merit"
    : student.marks > 35
    ? "pass"
    : "failed";
});
console.log(results);
// 1.5 Should print the Object and add results as an key and whatever marks to that key
/*
{
    marks: 88,
    total: 100,
    age: 18,
    fName: "Alice",
    lName: "Smith",
    student_id: "S001", 
    result: "high distinction"
  }
*/

// 2. Filter the students into 3 different Arrays split between pass/merit/high distinction

// 3. Fetch two objects held within the Student array

// 4. Print first name and last name of the elements in the Arrays using template literals using sentence case

// 5. Sort the array alphabetically asc

// 6. Combine two array consisting of Student and Result
