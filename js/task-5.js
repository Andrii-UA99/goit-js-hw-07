function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elementBody = document.body;
const spanColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {
  const randomColors = getRandomHexColor();
  elementBody.style.backgroundColor = randomColors;
  spanColor.textContent = randomColors;
});
