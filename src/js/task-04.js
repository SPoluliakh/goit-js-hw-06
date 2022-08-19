const refs = {
  counterValue: document.querySelector('#value'),
  incrimentEl: document.querySelector('[data-action="increment"'),
  deccrimentEl: document.querySelector('[data-action="decrement"]'),
};

refs.counterValue.textContent = 0;
console.dir(refs.counterValue);

refs.incrimentEl.addEventListener('click', () => {
  refs.counterValue.textContent += 1;
});

refs.deccrimentEl.addEventListener('click', () => {
  refs.counterValue.textContent -= 1;
});
