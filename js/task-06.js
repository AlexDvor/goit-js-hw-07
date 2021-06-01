
const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputBlur);


function onInputBlur(event) {

    const elValueLength = event.currentTarget.value.length;
    const dataLength = Number(event.currentTarget.getAttribute('data-length'));

    
    if (elValueLength === dataLength) {
        inputRef.classList.add('valid') 
        inputRef.classList.remove('invalid') 
    }

    if (elValueLength !== dataLength) {
        inputRef.classList.add('invalid') 
        inputRef.classList.remove('valid') 
   }
    
   
}


