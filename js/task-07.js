const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const fontSizeInitialValue = inputEl.max - (inputEl.max - inputEl.min) / 2;

spanEl.style.fontSize = `${fontSizeInitialValue}px`;
console.log(spanEl.style.fontSize)

inputEl.addEventListener('input', onFontSizeControlInput);

function onFontSizeControlInput(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
