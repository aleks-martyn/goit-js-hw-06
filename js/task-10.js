function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');

const createBtnEl = document.querySelector('button[data-create]');

const destroyBtnEl = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', getAmount);

function getAmount(event) {
  return createBoxes(inputEl.value);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    console.log(box);
  }
}
