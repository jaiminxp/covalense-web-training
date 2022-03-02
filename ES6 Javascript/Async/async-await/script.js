// const sing = async () => {
//   throw 'cant sing';
// }

// sing().then(() => {
//   console.log("i am a singer");
// }).catch((err) => {
// console.log("🚀 ~ err", err)
// })

const delayedColorPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};


const rainbow = async() => { 
  await delayedColorPromise("red", 1000);
  await delayedColorPromise("orange", 1000);
  await delayedColorPromise("blue", 1000);
}