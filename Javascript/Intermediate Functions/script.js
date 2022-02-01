// FUNCTION EXPRESSION
// const num = function () {
//   console.log("function expression");
// };

// num();

// HIGHER ORDER FUNCTION

// passing function as values
// function repeater(func) {
//   func();
//   func();
//   func();
//   func();
// }

// const shout = function () {
//   console.log("HEYY!!");
// };

// function meow() {
//   console.log("MEOW");
// }

// repeater(meow);

// factory function
// function rangeMaker(min, max) {
//   return function (num) {
//     return num <= max && num >= min;
//   };
// }

// const isAdult = rangeMaker(18, 65);
// const isBetween12and48 = rangeMaker(12, 48);

//methods and this keyword
// const phone = {
//   company: "samsung",
//   model: "s21 ultra",
//   ring() {
//     // this is a method
//     console.log("RING RING RING!!");
//   },
// };

const laptop = {
  company: "samsung",
  model: "s21 ultra",
  battery: 93,
  ring() {
    // this is a method
    console.log("RING RING RING!!");
  },
  checkBattery() {
    console.log(this.company);
    this.ring();
  },
};

let batteryCopy = laptop.checkBattery;
try {
  batteryCopy(); // error line
  arr[1];
} catch (err) {
  console.log("ERROR OCCURRED");
  console.log("ERROR: ", err);
}

console.log("END OF FILE");
