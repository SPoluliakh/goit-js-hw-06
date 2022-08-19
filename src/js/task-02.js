const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeIngredientsItem = function (el) {
  const potatoesEl = document.createElement('li');
  potatoesEl.textContent = el;
  potatoesEl.classList.add('item');
  return potatoesEl;
};
const arrayOfItems = ingredients.map(makeIngredientsItem);

listEl.append(...arrayOfItems);
