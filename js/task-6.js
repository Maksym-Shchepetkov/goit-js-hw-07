function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const newDiv = document.createElement('div');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    fragment.append(newDiv);
  }

  boxesContainer.append(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inpArea = document.querySelector('input');

createBtn.addEventListener('click', () => {
  const newAmount = Number(inpArea.value);
  if (newAmount >= 1 && newAmount <= 100) {
    createBoxes(newAmount);
    inpArea.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
