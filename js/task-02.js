
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listElementRef = document.createElement('ul')
document.body.append(listElementRef);

const ingredientsCreat = array => array.map(option => {
    const itemElementRef = document.createElement('li');
    itemElementRef.textContent = option;
    return itemElementRef;
    
});

const createList = ingredientsCreat(ingredients);
listElementRef.append(...createList)

