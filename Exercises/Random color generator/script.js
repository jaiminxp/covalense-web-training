const btn = document.querySelector("button");

const randomColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColors();
});
