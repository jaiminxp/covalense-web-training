let nums = [1, 2, 3, 4, 5];

// nums.forEach((e) => {
//   console.log(e * e);
// });

// nums.map((e) => {
//   return e * e;
// });

// let greaterThan2 = nums.filter((e) => {
//   return e > 2;
// });

// let fakeDatabase = [
//   {
//     name: "Inception",
//     genre: "Thriller",
//   },
//   {
//     name: "Herediatery",
//     genre: "Horror",
//   },
//   {
//     name: "Hill house",
//     genre: "Horror",
//   },
// ];

// let horrorMovies = fakeDatabase.filter((e) => {
//   return e.genre === "Horror";
// });

nums.reduce((a, cv) => {
  return a + cv;
}, 100);

1, 2, 3, 4, 5;
// ^

// a = 1, cv = 2, 1 + 2 = 3,
// a = 3, cv = 3, 3 + 3 = 6,
// a = 6, cv = 4, 6 + 4 = 10,
// a = 10, cv = 5, 10 + 5 = 15

//   15
