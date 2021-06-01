

const ref = {
  decrementRef: document.querySelector('[data-action="decrement"]'),
  incrementRef: document.querySelector('[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};


let valueBox = 0;

ref.decrementRef.addEventListener('click', () =>
  ref.valueRef.textContent = valueBox-=1
);

ref.incrementRef.addEventListener('click', () =>
  ref.valueRef.textContent = valueBox+=1
);
