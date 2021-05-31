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


const ingredientsCreat = ingredients.map(option => {
    const itemElementRef = document.createElement('li');
    itemElementRef.textContent = option;
    listElementRef.appendChild(itemElementRef);
    return itemElementRef;
    
});

console.log(ingredientsCreat);





// const listElementRef = document.createElement('ul')
// document.body.append(listElementRef);


// const ingredientsCreat = ingredients.map(option => {
//     const itemElementRef = document.createElement('li');
//     itemElementRef.textContent = option;
//     listElementRef.appendChild(itemElementRef);
//     return itemElementRef;
    
// });

// console.log(ingredientsCreat);


















