// let sum = 0;
// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// LOOPING OVER ARRAYS
// let colors = ["red", "green", "blue"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for (let color of colors) {
//   console.log("color is: ", color);
// }

// NESTED LOOPS
// //outer loop
// for (let i = 0; i < 10; i++) {
//   console.log("outer" + i);

//   //inner loop
//   for (let j = 0; j < 3; j++) {
//     console.log("  inner:" + j);
//   }
// }

// let password = "pingpong";
// let guess = prompt("GUESS MY PASSWORD");

// while (guess !== password) {
//   guess = prompt("GUESS MY PASSWORD");

//   if (guess === "QUIT") {
//     break;
//   }
// }

// console.log("YOU HACKED MY ACCOUNT");

// for (let index = 0; index > -1; index++) {
//   console.log(index);
//   if (index === 100) {
//     break;
//   }
// }

// console.log("you escaped from the loop");

// looping thorugh nested arrays
// let row1 = ["0", "0", "X"];
// let row2 = ["0", "X", "X"];
// let row3 = ["X", "0", "0"];

// let board = [row1, row2, row3];

// // print the board
// for (let row of board) {
//   for (const position of row) {
//     console.log("🚀 ~ position", position);
//   }
// }

// LOOPING THOROUGH OBJECT
// let ironMan = {
//   name: "Tony",
//   ArcReactor: true,
//   metals: ["titanium", "vibranium"],
//   wife: "Pops",
// };

// let keys = Object.keys(ironMan);

// for (key of keys) {
//   console.log(`${key} is ${ironMan[key]}`);
// }

// for (let key in ironMan) {
//   console.log(`${key} is ${ironMan[key]}`);
// }

// name ironMan[key] -> ironMan["name"] -> "tony"
// ArcReactor ironMan[key] -> ironMan["ArcReactor"] -> true
