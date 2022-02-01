let nums = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let shows = [
  {
    name: "Castlevania",
    platform: "Netflix",
    rating: 80,
    year: 2018,
  },
  {
    name: "Sherlock",
    platform: "HBO",
    rating: 98,
    year: 2015,
  },
  {
    name: "Euphoria",
    platform: "HBO",
    rating: 85,
    year: 2020,
  },
  {
    name: "Money Heist",
    platform: "Netflix",
    rating: 100,
    year: 2017,
  },
];

// nums.forEach(function (e) {
//   console.log(e);
//   e = e * 2;
//   console.log(e);
// });

// let doubleNums = nums.map(function (e) {
//   return (e *= 2);
// });

// let showNames = shows.map(function (e) {
//   return e.name;
// });

// ARROW FUNCTIONS
// const myFunc = () => {
//   console.log("ARROW FUNCTIONS ARE AWESOME");
// };

// const shoutName = (name) => name.toUpperCase();

// //implicit return
// const square = (num) => num ** 2;

// const product = (num, num2) => num * num2;

// FIND METHOD
// shows.find((e) => e.year > 2018);

// FILTER METHOD
// nums.filter((e) => e > 5);

// const goodShowNames = shows.filter((e) => e.rating > 90).map((e) => e.name);

// EVERY METHOD

// function isGreaterThanZero(num) {
//   return num > 0;
// }

//  REDUCE METHOD
// nums.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 100);

// [-1, 2, 3, 4].reduce((max, currentValue) => {
//   if (max > currentValue) {
//     return max;
//   } else {
//     return currentValue;
//   }
// });

// this -> window
// const laptop = {
//   company: "lenovo",
//   model: "ideapad 320",
//   battery: 100,
//   beep: () => {
//     console.log(this.company);
//   },
//   shutDown: function () {
//     console.log("inside shutdown", this);
//     // this -> laptop
//     setTimeout(() => {
//       console.log("inside setTimeout", this);
//     }, 3000);
//   },
// };

// console.log("before");

// setTimeout(() => {
//   console.log("HII");
// }, 5000);

// console.log("after");

const validUserNames = (arr) => {
  const newArr = arr.filter((e) => e.length <= 10);
  return newArr;
};
