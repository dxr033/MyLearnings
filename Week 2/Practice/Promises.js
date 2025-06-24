
/*
    Demo on how to construct a simple Promise
*/
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below: Rewrite this with async and with setTimeout, setInterval which calls the function after a delay.
const myExecutor = (resolve, reject) => {
  setTimeout(() => {
    if (inventory.sunglasses > 0) {
      resolve("Sunglasses order processed.");
    } else {
      reject("That item is sold out.");
    }
  }, 1000); // 1 second delay
};

// Example using async/await with setTimeout
const orderSunglassesAsync = async () => { //1. async delared and Wrapped around Promise
  return new Promise((resolve, reject) => { // 2. anonymous func with resolve/reject
    setTimeout(() => { // 3. set Timeout
      if (inventory.sunglasses > 0) {
        resolve("Sunglasses order processed (async/await).");
      } else {
        reject("That item is sold out (async/await).");
      }
    }, 1000);
  });
};

// Example using setInterval to repeatedly check inventory
const checkInventoryInterval = () => {
  let attempts = 0;
  const intervalId = setInterval(() => {
    attempts++;
    if (inventory.sunglasses > 0) {
      console.log("Sunglasses available (interval check).");
      clearInterval(intervalId);
    } else if (attempts >= 5) {
      console.log("Sunglasses still sold out after 5 checks.");
      clearInterval(intervalId);
    } else {
      console.log("Checking inventory again...");
    }
  }, 1000);
};

// const executeTwo = async(resolve,reject) => {
//     if(inventory.sunglasses > 0){
//         resolve("Sunglasses order processed.")
//         }
//         else{
//             reject("This item is sold out.")
//         }
// };

//executeTwo();


const orderSunglasses = () => {return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise); // result = Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'Sunglasses order processed.'}
// Try printing out only the result of resolve().

// setTimeout part of the Windows callback function.
const timer = setTimeout(() => console.log('This message is delayed 2 seconds'), 2000);
console.log('This message is logged immediately.' + timer); 

//Simple demonstration of the .then() callback function

// let prom = new Promise((resolve, reject) => {
//   let num = Math.random();
//   if (num < .5 ){
//     resolve('Yay!');
//   } else {
//     reject('Ohhh noooo!');
//   }
// });

// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };

// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };


// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
 
//       if (success) {
//         resolve({ name: "Alice", age: 25 });
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 2000); // simulates 2 seconds delay
//   });
// };
 
// fetchData()
//   .then(data => {console.log("Data:", data);return data.name})
//   .then(name =>  {console.log(name)})
//   .catch(error => console.error("Error:", error));

  
// call these API's and print results then call second API run the results then call third API and run the results. 



//   fetch('https://reqres.in/api/users?page=2')
//   .then(res => res.json())
//   .then(data => console.log(data));

//   fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(data => console.log(data));

  // Try retrieve these .JSON obj using async/await and Promises.
// Fetching data from multiple APIs sequentially using Promises
// This example demonstrates how to fetch data from multiple APIs in sequence using Promises.
setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log('This is the output:' + res);
            return res.json()})
        .then(users => {
                console.log('Success: Response code 200');
                console.log('Users:', users);
                return fetch('https://reqres.in/api/users?page=2');
        })
        .then(res => res.json())
        .then(data => {
                console.log('Reqres Users:', data);
                return fetch('https://fakestoreapi.com/products');
        })
        .then(res => res.json())
        .then(products => {
                console.log('Products:', products);
        })
        .catch(error => {
                console.error('Error:', error);
        });
}, 2000);

// Using async/await to fetch users
// It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain
//This uses try catch to handle errors with async/await
//How to handle success/failures
  const fetchUsers = async () => {
  try {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data1 = await response1.json();
    console.log(data1);

    const response2 = await fetch('https://reqres.in/api/users?page=2');
    const data2 = await response2.json();
    console.log(data2);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUsers();


