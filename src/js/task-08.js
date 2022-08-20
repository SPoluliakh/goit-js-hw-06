const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('please, fill in all the fields');
  }

  const fieledForm = {
    email: email.value,
    password: password.value,
  };

  console.log(fieledForm);
  event.currentTarget.reset();
}
