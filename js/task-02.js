const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeIngredientsList = arrayOfIngredients => {
  return arrayOfIngredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');

    return listItem;
  });
};

const elements = makeIngredientsList(ingredients);
console.log(elements);

listEl.append(...elements);
