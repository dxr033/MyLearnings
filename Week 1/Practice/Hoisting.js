
console.log(a); // undefined (not ReferenceError)
var a = 5;
console.log(a); // 5

// Explanation:
// The declaration 'var a' is hoisted to the top, but its assignment (= 5) is not.
// So, 'a' exists when we first log it, but its value is undefined.

// 2. Variable Hoisting with let and const
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // 15

// Explanation:
// 'let' and 'const' are hoisted, but not initialized. Accessing them before declaration causes a ReferenceError.

// 3. Function Hoisting (Function Declarations)
hoistedFunction(); // "This function is hoisted!"

function hoistedFunction() {
  console.log("This function is hoisted!");
}

// Explanation:
// Function declarations are hoisted entirely, so you can call them before their definition.

// 4. Function Expressions are NOT Hoisted
// notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function() {
  console.log("This function is NOT hoisted!");
};

// Explanation:
// Only the variable 'notHoisted' is hoisted (as undefined), not the function assignment.

// 5. Summary
console.log(`
Summary:
- Variable declarations (var, let, const) are hoisted, but only 'var' is initialized as undefined.
- Function declarations are hoisted completely.
- Function expressions and arrow functions are NOT hoisted.`);