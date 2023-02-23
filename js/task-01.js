const itemsByClass = document.querySelectorAll('.item');

const numberOfCategories = itemsByClass.length;
console.log('Number of categories:', numberOfCategories);

itemsByClass.forEach(item => {
  const titleOfElement = item.firstElementChild.textContent;
  console.log('Category:', titleOfElement);

  const lengthOfListOfElement = item.lastElementChild.children.length;
  console.log('Elements:', lengthOfListOfElement);
});
