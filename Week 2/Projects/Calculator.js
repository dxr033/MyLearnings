const equations = [
  { operation: 'add', a: 5, b: 3 },
  { operation: 'subtract', a: 10, b: 4 },
  { operation: 'multiply', a: 7, b: 6 },
  { operation: 'divide', a: 20, b: 5 }
];
// Operatiosns for Calculator
function add(a, b) {
  return a + b;
}   
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000; // Random delay between 1 and 3 seconds
}
// userinput = 3 + 5 -7 /8*1113

let userInput = "3 + 5";
// add space between each number and operator
userInput = userInput.replace(/([+\-*/])/g, ' $1 ');
// Remove extra spaces
userInput = userInput.replace(/\s+/g, ' ').trim();

console.log(userInput);
// Validate the input 




//Get the operator store to an array
let equationArr = userInput.split(' ');

// Combine every number, operator, number into a parsed equation
let parsedEquations = [];
for (let i = 0; i < equationArr.length - 2; i += 2) {
  const a = parseFloat(equationArr[i]);
  const operator = equationArr[i + 1];
  const b = parseFloat(equationArr[i + 2]);
  if (!isNaN(a) && !isNaN(b) && ['+', '-', '*', '/'].includes(operator)) {
    let operation;
    switch (operator) {
      case '+':
        operation = 'add';
        break;
      case '-':
        operation = 'subtract';
        break;
      case '*':
        operation = 'multiply';
        break;
      case '/':
        operation = 'divide';
        break;
    }
    parsedEquations.push({ a, operation, b });
  }
}

console.log(JSON.stringify(parsedEquations));

let operationPromises = parsedEquations.map(equation => {
  return calculateAsync(equation.operation, equation.a, equation.b);
});
Promise.all(operationPromises)
  .then(results => {
    console.log("All operations completed successfully:", results);
  })
  .catch(error => {
    console.error("An error occurred during the operations:", error);
  });

function calculateAsync(operation, a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let result;
        switch (operation) {
          case 'add':
            result = add(a, b);
            break;
          case 'subtract':
            result = subtract(a, b);
            break;
            case 'multiply':
            result = multiply(a, b);
            break;
          case 'divide':
            result = divide(a, b);
            break;
          default:
            return reject(new Error("Invalid operation"));
        }
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, generateRandomDelay());
  });
}



