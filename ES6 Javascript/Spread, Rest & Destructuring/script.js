// only trailing params can have default values
// function multiply(a, b = 1, c = 2) {
//   return a * b * c;
// }

// multiply(1);

// // spread operator
// // in function arguments
// const nums = [1, 2, 3, 56, 78];
// Math.max(nums);

// // in array literals
// let nums = [1, 2, 3];
// let alpha = ["a", "b", "c"];

// // in objects
// let person = {
//   name: "Jake",
//   age: 500,
// };

// let teacher = {
//   ...person,
//   subject: "Javascript",
//   teach() {
//     console.log("Javascript");
//   },
// };

// let school = {
//   schoolname: "JNV",
//   year: 1999,
// };

// rest and arguments object
// function sum() {
//   let add = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     add += arguments[index];
//   }

//   return add;
// }

// function sumAll(...nums) {
//   let add = 0;
//   for (let index = 0; index < nums.length; index++) {
//     add += nums[index];
//   }
// }

// let numbers = [1, 2, 3];

// array destructuring
// let results = [
//   "Usain Bolt",
//   "Neeraj Chopra",
//   "PT Usha",
//   "Jayesh",
//   "Abhinav",
//   "Pradosh",
// ];

// let [gold, silver, bronze, ...everyoneElse] = results;

// object destructuring
// let backendData = {
//   user: "Jake",
//   databases: 10,
//   isOnline: true,
// };

// let { user } = backendData;

// param destructuring

function carService({ fuel, tyres, paint }) {
  fuel = 100;
  tyres = 4;
  paint = "fresh";
  return { fuel, tyres, paint };
}

let tesla = {
  fuel: 40,
  tyres: 3,
  paint: "dirty",
};
