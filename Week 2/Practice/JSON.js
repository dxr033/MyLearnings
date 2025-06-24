// Example 1: Simple JSON object
const person = {
    "name": "Alice",
    "age": 30,
    "isStudent": false
};

// Example 2: JSON array of objects
const users = [
    { "id": 1, "username": "user1" },
    { "id": 2, "username": "user2" }
];

// Example 3: Nested JSON object
const company = {
    "name": "TechCorp",
    "employees": [
        { "name": "Bob", "role": "Developer" },
        { "name": "Carol", "role": "Designer" }
    ]
};

// Example 4: Parsing and stringifying JSON
const jsonString = JSON.stringify(person); // Convert object to JSON string
const parsedObject = JSON.parse(jsonString); // Convert JSON string back to object

console.log(jsonString);
console.log(parsedObject);

export { person, users, company, jsonString, parsedObject };
