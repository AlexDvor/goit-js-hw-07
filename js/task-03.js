const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },

];


// const galleryRef = document.querySelector('#gallery');

// const imagesElementCreat = array => array.map(option => {

//     const itemElementRef = document.createElement('li');
//     const imgElementRef = document.createElement('img');
//     itemElementRef.append(imgElementRef);
//     imgElementRef.src = option.url;
//     imgElementRef.alt = option.alt;
//     itemElementRef.classList.add('gallery__item');
//     imgElementRef.classList.add('gallery__img');
//     galleryRef.append(itemElementRef);
    
//     return galleryRef;
    
// });

// console.log(imagesElementCreat(images));






const makeImgMarkup = image => {
  return `
    <li><img src = "${image.url}" alt = "${image.alt}" width = 400></img></li>
  `
}


const galleryRef = document.querySelector("#gallery")

const makeImageGallery = images.map(makeImgMarkup).join('');

galleryRef.insertAdjacentHTML('beforeend', makeImageGallery);


galleryRef.style.listStyle = 'none';
galleryRef.style.display = 'flex';



















