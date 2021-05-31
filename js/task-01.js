const categoriesRef = document.querySelector('#categories');
const allCategoriesRef = categoriesRef.querySelectorAll('.item');
const lengthCategoriesRef = allCategoriesRef.length

console.log(`В списке ${lengthCategoriesRef} категории.`)

// -------------------------------------------------------------------

const allTitleRef = categoriesRef.querySelectorAll('h2');

const element = allTitleRef.forEach((element) => {
    console.log(`Категория: ${element.textContent}`);
});




const listRef = categoriesRef.querySelectorAll('ul');

const result = listRef.forEach((element) => {
    console.log(`Количество элементов: ${element.children.length}`);
});




// -------------------------------------------------------

