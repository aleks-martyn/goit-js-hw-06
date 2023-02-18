const listWithId = document.querySelector('#categories');
console.log(listWithId);


const itemByClass = document.querySelectorAll('.item');
console.log(itemByClass);

const numberOfCategories = itemByClass.length;
console.log('Number of categories:', numberOfCategories);

const itemElements = itemByClass[0].children;
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