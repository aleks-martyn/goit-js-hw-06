const inputEl = document.querySelector('input');

const createBtnEl = document.querySelector('button[data-create]');

const destroyBtnEl = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', getAmount);

destroyBtnEl.addEventListener('click', destroyBoxes);

function getAmount() {
  return createBoxes(inputEl.value);
}

function createBoxes(amount) {
  const arrayBoxes = [];
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.cssText = `width: ${(width += 10)}px; height: ${(height += 10)}px; background-color: ${getRandomHexColor()};`;
    arrayBoxes.push(box);
  }
  boxesEl.append(...arrayBoxes);
  boxesEl.style.cssText =
    'margin-top: 5px; display: flex; flex-direction: column; gap: 5px; align-items: center';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
