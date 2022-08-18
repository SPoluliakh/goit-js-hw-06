const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const potatoesEl = document.createElement('li');
potatoesEl.textContent = 'Potatoes';
potatoesEl.classList.add('item');

const mushroomsEl = document.createElement('li');
mushroomsEl.textContent = 'Mushrooms';
mushroomsEl.classList.add('item');

const garlicEl = document.createElement('li');
garlicEl.textContent = 'Garlic';
garlicEl.classList.add('item');

const tomatosEl = document.createElement('li');
tomatosEl.textContent = 'Tomatos';
tomatosEl.classList.add('item');

const herbsEl = document.createElement('li');
herbsEl.textContent = 'Herbs';
herbsEl.classList.add('item');

const condimentsEl = document.createElement('li');
condimentsEl.textContent = 'Condiments';
condimentsEl.classList.add('item');

listEl.append(potatoesEl, mushroomsEl, garlicEl, tomatosEl, herbsEl, condimentsEl);
