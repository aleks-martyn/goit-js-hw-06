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

const allTitleEl = document.querySelectorAll('h2');
 allTitleEl.forEach(el => {
  console.log('Category:', el.textContent);
  console.log('Elements:', );
});