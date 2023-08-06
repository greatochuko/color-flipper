const colorBtn = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");
const main = document.getElementById("main");

const characters = "abcdef0123456789";

colorBtn.addEventListener("click", changeColor);

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}

function getColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + characters[getRandomNumber()];
  }
  return color;
}

function changeColor() {
  const newColor = getColor();
  main.style.backgroundColor = newColor;
  colorName.innerHTML = newColor;
}
