
const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', onInputBlur);


function getClass(addClass, removeClass) {
    inputRef.classList.add(addClass);
    inputRef.classList.remove(removeClass);
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
