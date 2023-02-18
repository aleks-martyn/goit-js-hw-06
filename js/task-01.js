const itemsByClass = document.querySelectorAll('.item');

const numberOfCategories = itemsByClass.length;
console.log('Number of categories:', numberOfCategories);

itemsByClass.forEach(({children}) => {

const itemElements = children;

const titleOfElement = itemElements[0].textContent;
console.log('Category:', titleOfElement);

const listOfElement = itemElements[1].children;

const lengthOfListOfElement = listOfElement.length;
console.log('Elements:',lengthOfListOfElement);
});