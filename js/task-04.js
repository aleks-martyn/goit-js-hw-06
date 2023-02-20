const spanEl = document.querySelector('#value');
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]',
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]',
);

console.log(incrementBtn.dataset.action);