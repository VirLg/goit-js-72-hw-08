// Add imports above this line
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);


const refUl = document.querySelector('.gallery')
// refUl.addEventListener('click', onCloseModalWindow)

function createItem({original, preview, description}) { 
        return `
    <a class="gallery__item"
        href="${original}" onclick="return false">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" />
    </a>         `      
};


const markupGallary= galleryItems.map(createItem).join('')

refUl.insertAdjacentHTML("afterbegin", markupGallary)




let gallery = new SimpleLightbox('.gallery a',
    {
        navText: ['←', '→'],
        captionsData: 'alt',
        animationSpeed: 1800,
        animationSlide: true,
        // swipeTolerance:50,
        // fadeSpeed:1200,
        captionDelay:250,
    });


// gallery.on('show.simplelightbox', function () {

// 	// Do something…
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

