const refs = {
  counterValue: document.querySelector('#value'),
  incrimentEl: document.querySelector('[data-action="increment"]'),
  deccrimentEl: document.querySelector('[data-action="decrement"]'),
};
let counterValue = 0;

refs.incrimentEl.addEventListener('click', () => {
  counterValue += 1;
  refs.counterValue.textContent = counterValue;
});

refs.deccrimentEl.addEventListener('click', () => {
  counterValue -= 1;
  refs.counterValue.textContent = counterValue;
});
