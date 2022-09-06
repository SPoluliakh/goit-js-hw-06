const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const input = event.currentTarget;
  if (input.value.length === Number(input.dataset.length)) {
    inputEl.classList.add('valid');
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
  } else {
    inputEl.classList.add('invalid');
    if (inputEl.classList.contains('valid')) {
      inputEl.classList.remove('valid');
    }
  }
});
