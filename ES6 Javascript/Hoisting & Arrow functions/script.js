// //function hoisting
// greeting();

// function greeting() {
//   console.log("Hi");
// }

// // var hoisting
// console.log("before initialization a=", a);

// var a = 12;

// console.log("after initialization a=", a);

// // var hoisting
// console.log("before initialization a=", a);

// //declaration and initialization
// const a = 12;

// console.log("after initialization a=", a);

// function greeting() {
//   console.log("Hi");
// }

// function expression
// const greeting = function () {
//   console.log("Hi");
// };

// higer order function
// function executeTwice(func) {
//   func();
//   func();
// }

// function greeting() {
//   console.log("Hi");
// }

// function returnFunc() {
//   return function () {
//     console.log("I AM A FUNCTION");
//   };
// }

//methods
// const person = {
//   speak() {
//     console.log("Hi");
//   },
// };

// arrow functions
// const greeting = function (name, age) {
//   console.log("🚀 ~ age", age);
//   console.log("🚀 ~ name", name);
// };

// const arrowGreeting = (name, age) => {
//   console.log("🚀 ~ age", age);
//   console.log("🚀 ~ name", name);
// };

// const callName = (name) => {
//   console.log("🚀 ~ name", name);
// };

//  implicit return
// const square = (num) => num * num;

// this keyword
const a = 12;

// const person = {
//   name: "Nathan",
//   jump: function () {
//     console.log("JUMPING!");
//   },
//   intro: function () {
//     this.jump();
//     console.log(`Hi I am ${this.name}`);
//   },
// };

// this -> window
// const person = {
//   name: "Nathan",
//   intro: function () {
//     // this -> person
//     setTimeout(() => {
//       // this -> person
//       console.log(this);
//     }, 1000);
//   },
// };
