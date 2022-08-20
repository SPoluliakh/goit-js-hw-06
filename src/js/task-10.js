const refs = {
  numberEl: document.querySelector('#controls input'),
  boxesEl: document.querySelector('#boxes'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
};

refs.createEl.addEventListener('click', createDives);
refs.destroyEl.addEventListener('click', destroyDives);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const array = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    array.push(divEl);
  }
  return array;
}

function createDives() {
  const numberOfDives = createBoxes(refs.numberEl.value);
  refs.boxesEl.append(...numberOfDives);
}

function destroyDives() {
  refs.boxesEl.innerHTML = '';
  refs.numberEl.value = '';
}
