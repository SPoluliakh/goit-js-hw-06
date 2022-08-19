const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeIngredientsItem = el => {
  const element = document.createElement('li');
  element.textContent = el;
  element.classList.add('item');
  return element;
};
const arrayOfItems = ingredients.map(makeIngredientsItem);

listEl.append(...arrayOfItems);
