
const box = document.querySelector('#boxes');
const creatBtn = document.querySelector('[data-action="render"]');
const removeBtn = document.querySelector('[data-action="destroy"]');
const color = ['red', 'blue', 'tomato', 'black', 'yellow'];
const rand = color[Math.floor(Math.random() * color.length)];





function createBoxes(amount) {
    
    for (let i = 0; i < amount; i++){
        const creatEl = document.createElement('div');
        creatEl.style.backgroundColor = rand;
        creatEl.style.marginBottom = '25px'
        creatEl.style.width = '30px';
        creatEl.style.height = '30px';
        box.append(creatEl);
       

    }  
}



console.log(createBoxes(4));


// const randomizer = max => {
//   return Math.floor(Math.random() * max);
// };


