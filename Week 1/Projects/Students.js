// Create an array of an object of students
const students = [
  {
    marks: 88,
    total: 100,
    age: 18,
    fName: "Klice",
    lName: "Smith",
    student_id: "S001",
  },
  {
    marks: 25,
    total: 100,
    age: 19,
    fName: "Tob",
    lName: "Johnson",
    student_id: "S002",
  },
  {
    marks: 95,
    total: 100,
    age: 17,
    fName: "Pharlie",
    lName: "Brown",
    student_id: "S003",
  },
  {
    marks: 85,
    total: 100,
    age: 18,
    fName: "Siana",
    lName: "Williams",
    student_id: "S004",
  },
  {
    marks: 90,
    total: 100,
    age: 20,
    fName: "Othan",
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
    fName: "Meorge",
    lName: "Martinez",
    student_id: "S007",
  },
  {
    marks: 87,
    total: 100,
    age: 17,
    fName: "Jannah",
    lName: "Lee",
    student_id: "S008",
  },
  {
    marks: 79,
    total: 100,
    age: 18,
    fName: "Lan",
    lName: "Walker",
    student_id: "S009",
  },
  {
    marks: 93,
    total: 100,
    age: 20,
    fName: "Qulia",
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
//console.log(results);
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
const studentsResults = students.map(student => {
  let result;

  if (student.marks > 85) {
    result = "high distinction";
  } else if (student.marks > 60) {
    result = "merit";
  } else if (student.marks > 35) {
    result = "pass";
  } else {
    result = "failed";
  }
  return {
    ...student, // Check the spread operator
    result // return statement to append 'result' to existing student object
  };
});

//studentsResults.forEach(student => console.log(student)); // results not being added to studentsResults
//console.log(`StudentsResults: ${JSON.stringify(studentsResults)}`);
//console.log(`Students: ${JSON.stringify(students)}`);


// 2. Filter the students into 3 different Arrays split between pass/merit/high distinction
// Invoke this with .filter() and .find();
const studentDistinction = studentsResults.filter(student => student.result === "high distinction") ;
//console.log(`studentDistinction: ${JSON.stringify(studentDistinction)}`);
const studentMerit = studentsResults.filter(student => student.result === "merit");
const studentPass = studentsResults.filter(student => student.result === "pass");

//studentDistinction.forEach(student => console.log(student));

// 3. Fetch two objects held within the Student array
const randStudents = students.slice(3, 5);
//console.log(`randStudents: ${JSON.stringify(randStudents)}`);

// Fetch the first two student objects from the students array ... check slice(10,12)
const twoStudents = students.slice(0, 2);
//console.log(twoStudents);

// Check the splice() function and what it does.

// 4. Print first name and last name of the elements in the Arrays using template literals using sentence case
// This is called object destructuring with Arrays
//students.forEach(({fName,lName}) => console.log(`This student name is: ${fName} ${lName}`));

// 5. Sort the array alphabetically asc
students.sort((a,b) => a.fName.localeCompare(b.fName));
//students.forEach(s => console.log(s.fName));

// 6. Combine two arrays consisting of Student and Result
// Use concat, not splice. concat returns a new array combining both arrays.
// splice is for adding/removing elements in-place, not for combining arrays.

// Try using the spread operator using different examples such as fruits and vegetables
const combinedArray = students.concat(studentsResults);
//console.log(`StudentsResults: ${JSON.stringify(combinedArray)}`);

// 7. Modify student object to have a new Array of students and then combine the two Arrays 

// Create a new array of additional students
const newStudents = [
    {
        marks: 70,
        total: 100,
        age: 21,
        fName: "Alex",
        lName: "Cooper",
        student_id: "S011",
    },
    {
        marks: 55,
        total: 100,
        age: 22,
        fName: "Sam",
        lName: "Taylor",
        student_id: "S012",
    }
];

const allStudents = students.concat(newStudents);
//console.log(...allStudents);


// 8. Print all the keys and values of the Array as a single string with keys and values separate
// Using Object.entries() to get key-value pairs and map them to a string This will print each student's information in a single string format
students.forEach(student => {
    let studentString = Object.entries(student).map(item => console.log(item)) // Object.entries() returns an array of key-value pairs


        //.join(", "); // Join the key-value pairs into a single string

        //studentString = {name: dfgdj age 34}, {name: gtfk}
    //console.log(`${studentString}`);
});



// students.forEach(student => {
//     const studentInfo = `${student.fName} ${student.lName} has a score of ${student.marks} out of ${student.total}.`;
//     console.log(studentInfo);
// });

// 9. Closures and Hoisting in JS and uses of logic operators 
// if(1 === '1')
// Create an example for uses of logical operators for this condition with multiple examples

