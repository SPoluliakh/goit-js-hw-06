const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const input = event.currentTarget;
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
  } else {
    input.classList.add('invalid');
    if (input.classList.contains('valid')) {
      input.classList.remove('valid');
    }
  }
});
