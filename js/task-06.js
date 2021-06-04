
const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputBlur);


function getClass(add, remove) {
    inputRef.classList.add(add);
    inputRef.classList.remove(remove);
 }

function onInputBlur(event) {
    
    const elValueLength = event.currentTarget.value.length;
    const dataLength = Number(event.currentTarget.getAttribute('data-length'));
    
    if (elValueLength === dataLength) {
        getClass ('valid', 'invalid')  
    }

    if (elValueLength !== dataLength) {
        getClass ('invalid', 'valid')
   } 
}
