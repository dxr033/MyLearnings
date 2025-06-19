// Standard function declaration with no parameters
function myFunction(){
    console.log('Standard func');
}

// Standard function declaration with a parameter
function funcWithParam(param){
    console.log(`This function has ${param} as a parameter`);
}

// ES6 arrow function with no parameters
const funcWithES = () => {
    console.log('This function is made with ES6');
}

// ES6 arrow function with a single parameter
const funcWithParamES = param => {
    console.log(`This function has a parameter: ${param} and is in ES6`);
}

// ES6 arrow function with multiple parameters
const funcWithMultiES = (param1, param2) => {
    console.log(`This function has two parameters: param1: ${param1} and ${param2}`);
}

// ES6 one-line arrow function with a single parameter
const funcOneLine = param => console.log(`This function has one line and uses ES6 format`);

// Function expression (anonymous function assigned to a variable)
const funcExpression = function() {
    console.log('This is a function expression');
};

// Arrow function returning a value
const add = (a, b) => a + b;

// Arrow function with default parameters
const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
};

// Arrow function returning an object
const createUser = (name, age) => ({
    name,
    age
});

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs immediately!');
})();

// Standard function call
myFunction();

// Standard function call with parameters
funcWithParam('apples');

// ES6 arrow function call
funcWithES();

// ES6 arrow function with parameter
funcWithParamES('bananas');

// ES6 arrow function with multiple parameters
funcWithMultiES('oranges', 'grapes');

// ES6 one-line arrow function
funcOneLine('cherries');


