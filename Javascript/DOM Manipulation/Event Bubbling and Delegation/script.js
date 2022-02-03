const h1 = document.querySelector("h1");
const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

// this
btn.addEventListener("click", function (event) {
  console.log(this);
  console.log("button clicked");
});

para.addEventListener("click", function () {
  console.log(this);

  console.log("paragraph clicked");
});

// ul.addEventListener("click", function (event) {
//   console.log("🚀 ~ event", event);
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const li = document.createElement("li");
//   li.innerText = input.value;
//   ul.append(li);

//   input.value = "";
// });
