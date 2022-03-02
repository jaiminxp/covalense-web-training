// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("CONNECTION TIMEOUT");
//     } else {
//       success("SUCCESSFUL REQUEST");
//     }
//   }, delay);
// };

// fakeRequestCallback(
//   "books.com/page1",
//   (response) => {
//     console.log("IT WORKED!! (page1)");
//     console.log("🚀 ~ response", response);

//     fakeRequestCallback(
//       "books.com/page2",
//       (response) => {
//         console.log("IT WORKED!! (page2)");
//         console.log("🚀 ~ response", response);

//         fakeRequestCallback(
//           "books.com/page3",
//           (response) => {
//             console.log("IT WORKED!! (page3)");
//             console.log("🚀 ~ response", response);
//           },
//           (error) => {
//             console.log("ERROR page3");
//             console.log("🚀 ~ error", error);
//           }
//         );
//       },
//       (error) => {
//         console.log("ERROR page2");
//         console.log("🚀 ~ error", error);
//       }
//     );
//   },
//   (error) => {
//     console.log("ERROR page1");
//     console.log("🚀 ~ error", error);
//   }
// );

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("CONNECTION TIMEOUT");
      } else {
        resolve("SUCCESSFUL REQUEST");
      }
    }, delay);
  });
};

// fakeRequestPromise("books.com/page1")
//   .then((res) => {
//     fakeRequestPromise("books.com/page2")
//       .then((res) => {
//         console.log("🚀 ~ res", res);
//         fakeRequestPromise("books.com/page3")
//           .then((res) => {
//             console.log("🚀 ~ res", res);
//           })
//           .catch((err) => {
//             console.log("🚀 ~ err", err);
//           });
//       })
//       .catch((err) => {
//         console.log("🚀 ~ err", err);
//       });
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err", err);
//   });

fakeRequestPromise(`books.com/page1`)
  .then((res) => {
    console.log("🚀 ~ page 1", res);
    return fakeRequestPromise("books.com/page2");
  })
  .then((res) => {
    console.log("🚀 ~ page 2", res);
    return fakeRequestPromise("books.com/page3");
  })
  .then((res) => { 
    console.log("🚀 ~ page 3", res);
  })
  .catch((err) => { 
    console.log("error in one of the requests", err);
  })