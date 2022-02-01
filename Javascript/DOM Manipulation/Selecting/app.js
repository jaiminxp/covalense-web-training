let links = document.querySelectorAll("a");

for (let link of links) {
  link.innerText = "LINK!!";
  link.href = "https://google.com";
}

let img = document.querySelector("img");

img.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/330px-Bucephala-albeola-010.jpg"
);
