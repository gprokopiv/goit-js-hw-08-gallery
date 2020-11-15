import galleryItems from './gallery-items.js';  

const galleryContainer = document.querySelector('.js-gallery');
const modalBox = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');


const makeGalleryRowMarkUp = function({preview, original, description} = galleryItems) {
   return `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`;
  }
const makeGallery = galleryItems.map(makeGalleryRowMarkUp).join('');
galleryContainer.insertAdjacentHTML('afterbegin', makeGallery); 

galleryContainer.addEventListener('click', onClick);
  
  function onClick(event) {
    event.preventDefault()

    if (event.target.nodeName !=='IMG') {
      return;
    }

    modalImage.src = event.target.dataset.source;
    modalBox.classList.add('is-open');
    window.addEventListener('keydown', onEscapePress);

  };
 
  function onEscapePress(event) {
    if (event.code === 'Escape') {
      onCloseModalBtn();
    }
  }
   

  const closeModalBtn = document.querySelector(
    '[data-action="close-lightbox"]',
  );
  closeModalBtn.addEventListener('click', onCloseModalBtn);
  function onCloseModalBtn() {
    window.removeEventListener('keydown', onEscapePress);
    modalBox.classList.remove('is-open');
  };
   


