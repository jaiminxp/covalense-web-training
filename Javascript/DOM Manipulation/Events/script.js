const btn2 = document.querySelector("#v2");
const btn3 = document.querySelector("#v3");
const btn4 = document.querySelector("#v4");
const input = document.querySelector("input");
const form = document.querySelector("form");

// btn2.onclick = function () {
//   console.log("you clicked v2 button");
// };

// const alt = function () {
//   alert("stop clicking me");
// };

// btn2.onclick = alt;

// btn3.addEventListener("click", function () {
//   console.log("please stop clicking me");
// });

// btn3.addEventListener("click", alt);

// btn3.addEventListener("click", function () {
//   console.log(Math.random());
// });

// btn4.addEventListener("dblclick", function () {
//   console.log("please stop double clicking me");
// });

// input.addEventListener("keydown", function (event) {
//   if (event.code === "KeyJ") {
//     console.log("you pressed J key");
//   }
// });

const ul = document.createElement("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerText = input.value;
  ul.append(li);

  input.value = "";
});

document.body.append(ul);
