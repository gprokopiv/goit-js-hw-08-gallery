import galleryItems from './gallery-items.js';  
console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');
console.log(galleryContainer);


const makeGallery = function(galleryItems) {
 const {preview, original, description} = galleryItems;
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
const makeGalleryRowMarkUp = galleryItems.map(makeGallery).join('');
galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryRowMarkUp); 

galleryContainer.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick(event){
    if (event.target.nodeName !=='BUTTON') {
        return;
    }
    console.log(event.target);
    }
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
//<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>

// const lightboxEl = document.querySelector('.js-lightbox');
// console.log(lightboxEl);

// const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('lightbox__button');
//     // buttonEl.textContent = ;

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

