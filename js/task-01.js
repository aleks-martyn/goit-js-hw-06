const itemsByClass = document.querySelectorAll('.item');

const numberOfCategories = itemsByClass.length;
console.log('Number of categories:', numberOfCategories);

itemsByClass.forEach(({children}) => {

const titleOfElement = children[0].textContent;
console.log('Category:', titleOfElement);

const lengthOfListOfElement = children[1].children.length;
console.log('Elements:',lengthOfListOfElement);
});