const listWithId = document.querySelector('#categories');
console.log(listWithId);


const itemsByClass = document.querySelectorAll('.item');
console.log(itemsByClass);

const numberOfCategories = itemsByClass.length;
console.log('Number of categories:', numberOfCategories);

const itemElements = itemsByClass[0].children;
console.log(itemElements);

const titleOfElement = itemElements[0].textContent;
console.log('Category:', titleOfElement);

const listOfElement = itemElements[1].children;
console.log(listOfElement);

const lengthOfListOfElement = listOfElement.length;
console.log('Elements:',lengthOfListOfElement);



const allTitleEl = document.querySelectorAll('h2');
 allTitleEl.forEach(el => {
  console.log('Category:', el.textContent);
});