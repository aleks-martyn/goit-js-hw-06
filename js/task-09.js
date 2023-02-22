function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const spanEl = document.querySelector('.color');

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
}
