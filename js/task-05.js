const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onButtonClick)


function onButtonClick(event) {
  console.log(event.currentTarget.value)
  outputRef.textContent = event.currentTarget.value

  if (event.currentTarget.value === '') {
    outputRef.textContent = 'незнакомец'
  }
};


