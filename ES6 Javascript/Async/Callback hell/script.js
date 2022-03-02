// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "greeen";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//           setTimeout(() => {
//             document.body.style.backgroundColor = "purple";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {

//     });
//   });
// });

// function delayedColorChange(color, delay, doNext) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext();
//   }, delay);
// }

const delayedColorPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

delayedColorPromise("red", 1000)
  .then(() => delayedColorPromise("orange", 1000))
  .then(() => delayedColorPromise("yellow", 1000))
  .then(() => delayedColorPromise("green", 1000))
  .then(() => delayedColorPromise("cyan", 1000))
  .then(() => delayedColorPromise("blue", 1000));

