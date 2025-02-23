const bodyStyle = document.querySelector('body');

const changeColorBtn = document.querySelector('.change-color');

const textColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  textColor.textContent = randomColor;
  bodyStyle.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
