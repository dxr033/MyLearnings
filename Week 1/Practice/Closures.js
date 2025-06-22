// Closures are functions that have access to their outer function scope even after the outer function has returned.
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function
  }

  return innerFunction; // Returning the inner function
}

// Example 2: Counter using closure
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1

// Example 3: Private variables with closures
function secretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}

const mySecret = secretHolder("shh!");
console.log(mySecret.getSecret()); // "shh!"
mySecret.setSecret("new secret");
console.log(mySecret.getSecret()); // "new secret"

// Example 4: Closure in a loop (with let)
function buildFunctions() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      return i;})
    }
}