const spanEl = document.querySelector('#value');
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]',
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]',
);

let counterValue = 0;

decrementBtn.addEventListener('click', toDecrementValue);
incrementBtn.addEventListener('click', toIncrementValue);

function toDecrementValue(event) {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function toIncrementValue(event) {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
