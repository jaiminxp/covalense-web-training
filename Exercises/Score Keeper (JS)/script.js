let p1Span = document.querySelector("#p1Score");
let p2Span = document.querySelector("#p2Score");
let p1Btn = document.querySelector("#p1Btn");
let p2Btn = document.querySelector("#p2Btn");
let resetBtn = document.querySelector("#reset");
let winningSelect = document.querySelector("#winningScore");

let p1Score = 0;
let p2Score = 0;

let winningScore = parseInt(winningSelect.value);

let isGameOver = false;

winningSelect.addEventListener("change", function () {
  winningScore = parseInt(winningSelect.value);
});

p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    p1Span.innerText = p1Score;

    if (p1Score === winningScore) {
      isGameOver = true;
      p1Span.classList.add("winner");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
  }
});

p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    p2Span.innerText = p2Score;

    if (p2Score === winningScore) {
      isGameOver = true;
      p2Span.classList.add("winner");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
  }
});

resetBtn.addEventListener("click", function () {
  p1Score = 0;
  p2Score = 0;
  p1Span.innerText = p1Score;
  p2Span.innerText = p2Score;
  isGameOver = false;

  p1Span.classList.remove("winner", "loser");
  p2Span.classList.remove("winner", "loser");

  p1Btn.disabled = false;
  p2Btn.disabled = false;
});
