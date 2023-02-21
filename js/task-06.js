const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', toCheckQuantityOfNumbers);

function toCheckQuantityOfNumbers(event) {
  console.log(event.currentTarget.value.length);
  if(event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add('invalid');
  } else if(event.currentTarget.value.length === Number(inputEl.dataset.length)) {
  inputEl.classList.remove('invalid');
  inputEl.classList.add('valid');
}
}