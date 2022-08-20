function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClickChengeColor);

function onBtnClickChengeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
}
