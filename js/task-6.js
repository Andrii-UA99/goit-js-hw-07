const elementInput = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  containerBoxes.appendChild(fragment);
}

function destroySqueres() {
  const squeres = containerBoxes.querySelectorAll('div');
  squeres.forEach(element => {
    element.remove();
  });
}

createButton.addEventListener('click', () => {
  const amount = Number(elementInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    elementInput.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  destroySqueres();
});