const fontSizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');


fontSizeControl.addEventListener('input',onInputClick);

function onInputClick(event) {
    const rangeValue = event.currentTarget.value;
    const changeSize = textSize.style.fontSize = rangeValue + 'px';
    console.log(`Размер данного шрифта ровно ${changeSize}`);
    
}