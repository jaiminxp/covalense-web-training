/*

JAVASCRIPT DECISION MAKING 

*/

// IF STATEMENT
// let timeOfDay = "afternoon";
// let isLoggedIn = true;

// if (timeOfDay === "morning") {
//   alert("GOOD MORNING!!");
// }

// if (timeOfDay === "afternoon") {
//   alert("GOOD AFTERNOON");
// }

// if (isLoggedIn) {
//   alert("YOU ARE LOGGED IN");
// }

// ELSE IF, ELSE STATEMENT

// THEME PARK
// 0 - 5 -> FREE
// 5 - 10 -> $10
// 10 - 65 -> $20
// 65+ -> FREE

// let age = prompt("enter your age");

// if (age > 0) {
//   if (age < 5) {
//     alert("YOU ARE A BABY, ITS FREE FOR YOU");
//   } else if (age < 10) {
//     alert("YOU ARE A TEEN, FEE IS $10");
//   } else if (age < 65) {
//     alert("YOU ARE SENIOR, FEE IS $20");
//   } else if (age > 65) {
//     alert("YOU ARE SUPER SENIOR, ITS FREE FOR YOU");
//   } else {
//     alert("INVALID AGE");
//   }
// } else {
//   alert("INVALID AGE");
// }

// NESTING CONDTIONALS
// let password = prompt("Enter your password");
// console.log("🚀 ~ password", password);

// // password > 6 characters
// // password should have $

// if (password.length > 6)
// {
//   if (password.indexOf("$") === -1)
//   {
//     console.log("password doesnt have $");
//   }
// } else {
//   console.log("password should be atleast 6 characters");
// }

// TRUTHY AND FALSY

// we dont want an empty name

// let firstName = prompt("enter your name");

// if (firstName) {
//   console.log(`your name is ${firstName}`);
// } else {
//   console.error("please enter your name");
// }

// let password = prompt("Enter your password");
// console.log("🚀 ~", password);

// // password > 6 characters
// // password should have $

// if (password.length > 6 && password.indexOf("$") === -1) {
//   console.log("password doesnt have $");
// } else {
//   console.log("password should be atleast 6 characters");
// }

// let age = 3;

// if (!(age < 5 || (age > 65 && age > 0))) {
//   alert("ITS FREE FOR YOU");
// } else if (age < 10 && age > 0) {
//   alert("YOU ARE A TEEN, FEE IS $10");
// } else if (age < 65 && age > 0) {
//   alert("YOU ARE SENIOR, FEE IS $20");
// } else {
//   alert("INVALID AGE");
// }

// SWITCH STATEMENT

// let day = prompt("enter day");
// day = parseInt(day);

// switch (day) {
//   case 1:
//     console.log("SUNDAY");
//     break;
//   case 2:
//     console.log("MONDAY");
//     break;
//   case 3:
//     console.log("TUESDAY");
//     break;
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//     console.log("REST HALF OF THE WEEK");
//     break;
//   default:
//     console.log("INVALID DAY");
// }

// if (day === 1) {
//   console.log("SUNDAY");
// } else if (day === 2) {
//   console.log("MONDAY");
// } else if (day === 3) {
//   console.log("TUESDAY");
// } else {
//   console.log("REST OF THE WEEK");
// }
