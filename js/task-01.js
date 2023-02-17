const listWithId = document.querySelector('#categories');
console.log(listWithId);
console.dir(listWithId);

const itemByClass = document.querySelectorAll('.item');
console.log(itemByClass);

const qwe = listWithId.querySelectorAll('.item');
console.log(qwe);

console.log(itemByClass[0]);
console.log(itemByClass[1]);
console.log(itemByClass[2]);

const numberOfCategories = itemByClass.length;
console.log('Number of categories:', numberOfCategories);

const animalsTitleEl = document.querySelector('h2');
console.log(animalsTitleEl);
console.log(animalsTitleEl.textContent);