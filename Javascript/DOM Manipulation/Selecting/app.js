let links = document.querySelectorAll("a");

for (let link of links) {
  link.innerText = "LINK!!";
  link.href = "https://google.com";
}

let img = document.querySelector("img");
let sqrimg = document.querySelector(".square");
let heading = document.querySelector("h1");
let h2 = document.querySelector("#mw-toc-heading");

let names = ["Lahari", "Jayesh", "Siereesha", "Swati"];

const ul = document.createElement("ul");

for (let name of names) {
  let li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
}

img.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/330px-Bucephala-albeola-010.jpg"
);
