// This demonstration uses spread of args[] from args[0,1,2] to ..args = 1,2,3
// function myFunction(x, y, z) { x= 4; y=5; z=6;
//     const newarr = [x,y,z];
//     return newarr;}
// const args = [0, 1, 2];
// const argss = myFunction(...args);
// console.log(argss);

// this example uses spread twice for this function. ...args = 0,1 also ...[3] = 3 
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


// Spread operator with functions
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6



