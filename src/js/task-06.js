const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length == inputEl.dataset.length) {
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
