
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
    listElementRef.append(itemElementRef);
    return itemElementRef;
    
});

console.log(ingredientsCreat(ingredients));

















