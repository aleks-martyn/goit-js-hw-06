function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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

    console.log(box);
    arrayBoxes.push(box);
    console.log(arrayBoxes);
  }
  boxesEl.append(...arrayBoxes);
  console.log(boxesEl);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  console.log(boxesEl.innerHTML);
}
