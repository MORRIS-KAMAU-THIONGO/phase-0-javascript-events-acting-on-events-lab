// JavaScript
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left) || 0;
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left) || 0;
  if (left < 360) { // assuming game width is 400px and dodger is 40px wide
    dodger.style.left = `${left + 1}px`;
  }
}