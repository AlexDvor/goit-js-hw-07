
const box = document.querySelector('#boxes');
const creatBtn = document.querySelector('[data-action="render"]');
const removeBtn = document.querySelector('[data-action="destroy"]');
const color = ['red', 'blue', 'tomato', 'black', 'yellow', 'aqua', 'brown','green','gold'];
// const rand = color[Math.floor(Math.random() * color.length)];
const inputRef = document.querySelector('#controls input');
let inputValue = 0;


inputRef.addEventListener('input', onInputValue);
creatBtn.addEventListener('click', onClickTargetBtn)
removeBtn.addEventListener('click', destroyBoxes)
    


function onInputValue (event) {
inputValue = event.currentTarget.value;
  return Number(inputValue);
}

function randColor() {
    return color[Math.floor(Math.random() * color.length)];
};

function onClickTargetBtn() {
  return createBoxes(inputValue);
}

function destroyBoxes() {
  box.innerHTML = '';
  inputRef.value = '';
}




function createBoxes(amount) {

    const newArr = [];
    let increment = 0;
    
    for (let i = 0; i < amount; i+=1){
        const creatEl = document.createElement('div');
        creatEl.style.backgroundColor = randColor();
        creatEl.style.margin= '20px'
        creatEl.style.width = `${30+increment}px`;
        creatEl.style.height =`${30+increment}px`;
        newArr.push(creatEl);
        increment += 10;
    }
    
    box.append(...newArr);
}




// const controlsArrEl = document.querySelectorAll('#controls button');
// const btnRenderEl = controlsArrEl[0];
// const btnDestroyEl = controlsArrEl[1];
// const inputEl = document.querySelector('input[type="number"]');
// const boxesEl = document.querySelector('#boxes');
// let inputValue = 0;



// // -------- Вешаем слушателей
// inputEl.addEventListener('input', onInputTargetInput);
// btnRenderEl.addEventListener('click', onClickTargetBtn);
// // btnDestroyEl.addEventListener('click', destroyBoxes);



// // -------- Возвращает input.value
// function onInputTargetInput(event) {
//   inputValue = event.currentTarget.value;
//   return Number(inputValue);
// }



// // -------- Создаёт divs
// function createBoxes(amount) {
//   let boxesArr = [];
//   let increment = 0;
//   for (let i = 0; i < amount; i += 1) {
//     const newBox = document.createElement('div');
//     newBox.style.width = `${30 + increment}px`;
//     newBox.style.height = `${30 + increment}px`;
//     newBox.style.backgroundColor = '#' + randomColors();
//     boxesArr.push(newBox);
//     increment += 10;
//   }
//   boxesEl.append(...boxesArr);
// }




// // -------- Загоняет input.value в качестве аргумента в createBoxes()
// function onClickTargetBtn() {
//   return createBoxes(inputValue);
// }
// // // -------- Функция очищает родительский div от созданного контента
// // function destroyBoxes() {
// //   boxesEl.innerHTML = '';
// //   inputEl.value = '';
// // }
// // -------- Функция создает рандомные цвета
// function randomColors() {
//   return Math.floor(Math.random() * 16777215).toString(16);
// }








