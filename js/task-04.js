

const refs = {
  decrementRef: document.querySelector('[data-action="decrement"]'),
  incrementRef: document.querySelector('[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};


let valueBox = 0;

refs.decrementRef.addEventListener('click', () =>
  refs.valueRef.textContent = valueBox-=1
);

refs.incrementRef.addEventListener('click', () =>
  refs.valueRef.textContent = valueBox+=1
);
