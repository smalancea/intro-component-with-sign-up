const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

let regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateForm(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.parentElement.classList.add('error');
    } else {
      input.parentElement.parentElement.classList.remove('error');
    }

    if (input.type == 'email') {
      if (input.value.match(regex)) {
        input.parentElement.parentElement.classList.remove('error');
      } else {
        input.parentElement.parentElement.classList.add('error');
      }
    }
  });

  if (validateForm) {
    form.reset();
  }
}

form.addEventListener('submit', validateForm);
