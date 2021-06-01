

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








// const ingredientsRef = document.querySelector('#ingredients');

// // const ingredients = [
// //   'Картошка',
// //   'Грибы',
// //   'Чеснок',
// //   'Помидоры',
// //   'Зелень',
// //   'Приправы',
// // ];

// const addElement = array => {

//   return array.map(elem => {
//   const itemRef = document.createElement('li')
//   itemRef.textContent = elem;
//   return itemRef
//   });
 
// }
// const listArray = addElement(ingredients)
// ingredientsRef.append(...listArray)















