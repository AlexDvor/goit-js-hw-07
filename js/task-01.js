const categoriesRef = document.querySelector('#categories');
const allCategoriesRef = categoriesRef.querySelectorAll('.item');
const lengthCategoriesRef = allCategoriesRef.length

console.log(`В списке ${lengthCategoriesRef} категории.`)


const getElement = () => {
   allCategoriesRef.forEach(item => {
        const name = item.querySelector('h2').textContent;
        const quantity = item.querySelector('ul').children.length;
        console.log(`Категория: ${name}`);
        console.log(`Количество элементов: ${quantity}`);
    })
}

getElement(categoriesRef);
