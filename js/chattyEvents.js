
const coordsOutptRef = document.querySelector('.js-coords');;
let mouseMoveCounter = 0;

const throttledOnMouseMove =_.throttle(onMouseMove, 500);

window.addEventListener('mousemove', throttledOnMouseMove);
function onMouseMove(event) {
    mouseMoveCounter +=1;

    coordsOutptRef.textContent = `Amount: ${mouseMoveCounter},
    X: ${event.clientX},
    Y: ${event.clientY},
  `;
}


// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange));

// function onInputChange(event) {
//     inputCounter +=1;

// outputRef.textContent = `
// Amount of onInputChange: ${inputCounter};
// Meaning: ${event.target.value}
// `;

// }




// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JAVA' },
//   { label: 'JAVA SCRIPT' },
//   { label: 'NODE' },
//   { label: 'REACT' },
// ];

// const refs = {
//   list: document.querySelector('js-list'),
//   list: document.querySelector('#filter'),
// }; 
// const listItemMarkup = createListItemMarkup(tech);

// function createListItemMarkup(items){
//     return items.map(item =>`<li> ${item.label}</li>`).join('');
// };

// refs.list.innerHTML = listItemsMarkup;
// refs.input.addEventListener('input', onFilterChange); 

// function onFilterChange(event) {
//     const filter = event.target.value.loLowerCase();

//     const filteredItems = tech.filter(t =>
//         t.label.loLowerCase().includes(filter),
//         )

//     constlistItemsMarkup = createListItemMarkup(filteredItems);
//     refs.list.innerHTML = listItemsMarkup;
// }

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, {once: true});

// });
// function onImageLoaded(event) {
//     console.log("loaded image");
//     evt.target.classList.add('appear');
//         console.log('evt.target');

// };


if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
  console.log('supported in browser');
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
  img.src = img.dataset.src;
});

} else {
  // fetch polyfill/third-party library
    console.log('fetch polyfill/third-party library');

    const script = document.querySelector('script');
    script.src = 
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
    script.integrity = "sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg=="
    script.crossorigin="anonymous";

    document.body.appendChild(script);

}

