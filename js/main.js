import galleryItems from './gallery-items.js';  

const galleryContainer = document.querySelector('.js-gallery');
const backdrop = document.querySelector('.js-lightbox');
const onOpenModalBoxClick = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');


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
  console.log(event.target);

// const currentActiveCard = document.querySelector('.lightbox.is-open');
// if(currentActiveCard) {
//     currentActiveCard.classList.remove('.lightbox.is-open');
// }
// onOpenModalBoxClick();
};
    

 
  //   openModalBox.addEventListener('click', onOpenModalBoxClick);
  //   function onOpenModalBoxClick(event) {
  //     window.addEventListener('keydown', onEscapePress);
  //     document.body.classList.add('.lightbox.is-open');
  // };
  // console.log(openModalBox);

//   closeModalBtn.addEventListener('click', onCloseModalBtnClick);
//   function onCloseModalBtnClick(event) {
//     window.removeEventListener('keydown', onEscapePress);
// };
// console.log(closeModalBtn);

// backdrop.addEventListener('click', onBackdropClick);
// function onBackdropClick(event) {
//     if (event.currentTarget === event.target) {
//       onCloseModal();
//     }


    
  
  
  // console.log(backdrop);

   function onEscapePress (event) {
   if(event.code === 'Escape') {
    closeModalBtn();
   }
}
  
galleryContainer.childNodes.forEach(function(item) {
  item.addEventListener('click', onOpenModalBoxClick);
});
galleryContainer.addEventListener('click', onOpenModalBoxClick)
function openModalWindow(event) {
  event.preventDefault()
  if (event.target.nodeName !=='IMG') {
        return;
    }
    console.log(event.target);
    modalImg.classList.add('is-open')
  fullImg.src = event.target.dataset.source
  fullImg.alt = event.target.dataset.alt
}


 
// galleryContainer.addEventListener('click', onGalleryContainerClick);
// function onGalleryContainerClick(event){
//     if (event.target.nodeName !=='BUTTON') {
//         return;
//     }
//     console.log(event.target);
//     }
// Создай галерею с возможностью клика по ее элементам и 
// просмотра полноразмерного изображения в модальном окне. 
// Превью результата посмотри по ссылке.бей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// 
// Превью

// РазЗакрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.
// Ссылка на оригинальное изображение должна храниться в 
// data-атрибуте source на элементе img, и указываться в href 
// ссылки (это необходимо для доступности).


// const lightboxEl = document.querySelector('.js-lightbox');
// const imageREf = document.querySelector('.gallery__link').childNodes;
// console.log(imageREf);
// document.querySelector('.gallery__link').addEventListener('click', onOpenModal);

// const closeLightboxEl = document.querySelector('[data-action="close-lightbox"]');
// // closeLightboxEl = '../images';
// console.log(closeLightboxEl);

// window.addEventListener('keydown',)

// closeLightboxEl.addEventListener('click', onCloseModal);


// function onCloseModal(event) {
//   document.body.classList.remove('[data-action="close-lightbox"]');
//   console.log(event);

// }

// function onOpenModal(event) {
//   document.body.classList.add('.js-lightbox');
//   if (event.currentTarget === event.target) {
//     console.log('close it');
//     onCloseModal();
//   }
//   event.preventDefault();
//   console.log(event);

// }
//  function onKeyPress (event) {
// console.log(event);
//  }


// const buttonEl = document.createElement('.lightbox__button');
//     buttonEl.type = 'button';
//     // buttonEl.classList.add('lightbox__button');
//     buttonEl.src = '../images/icon-close.svg';

// console.log(buttonEl);



// function onGalleryContainerClick(event){
// if (event.target.nodeName !=='BUTTON') {
//     return;
// }
// console.log(event.target);
// }

// 
// Дополнительно
// Следующий функционал не обязателен при сдаче задания, 
// но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".















