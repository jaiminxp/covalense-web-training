function multiply(x, y) {
  return x * y;
}

function square(num) {
  return multiply(num, num);
}

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}
