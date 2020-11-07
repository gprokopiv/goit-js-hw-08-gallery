const container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(event) {
    if(event.target.nodeName !== 'BUTTON') {
        return;
    }
    // console.log(event.target);
    console.log(event.target.textContent);
    // console.log(event.target.nodeName)

    // if(event.target.nodeName !== '.js-container') {
    //     return;
    // }
    // console.log(event.target.textContent);
}


const addBtn = document.querySelector('.js-add-button');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Button ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter +=1;
}


const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(event){
// if (event.target.nodeName !=='BUTTON') {
//     return;
// }
// // console.log(event.target);


// const currentActiveBtn = document.querySelector('.tag__btn--active');
// // console.log(currentActiveBtn);


// if (currentActiveBtn) {
//     currentActiveBtn.classList.remove ('tag__btn--active')
// }
// console.log(event.target);

// const nextActiveBtn = event.target;
// nextActiveBtn.classList.add('tag__btn--active');
// selectedTag = nextActiveBtn.dataset.value;
// console.log(selectedTag);
// }
//  let selectedTags = [];
// function onTagsContainerClick(event){
//     if (event.target.nodeName !=='BUTTON') {
//         return;
//     }
//     console.log(event.target);
//     event.target.classList.toggle('tag__btn--active');
//     selectedTags.push(event.target.dataset.value);
//     console.log(selectedTags);

//     }



let selectedTags = new Set();

function onTagsContainerClick(event){
    if (event.target.nodeName !=='BUTTON') {
        return;
    }
    const btn = event.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tag__btn--active');

    if(isActive) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);

    }

    event.target.classList.toggle('tag__btn--active');
    console.log(selectedTags);

    }


const colors = [
    { hex: '#fff    ', rgb: '96, 125, 139'},
]
const patetteContainer =  document.querySelector('.js-palette');
const cardsMarkUp = createColorCardsMarkUp(colors);

patetteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);
patetteContainer.addEventListener('click', onPaletteContainerClick)

console.log(createColorCardsMarkUp(colors));

function createColorCardsMarkUp (colors) {
    return colors
    .map(({hex, rgb} = colors) => {
    return `
    <div class="color-card">
    <div class="color-swatch"
    data-hex="${hex}"
    data-rnb="${rgb}"
    style="background-color: ${hex};"></div>
    <div class="color-meta">
        <p>Hex:${hex} </p>
        <p>RGB: ${rgb}</p>
    </div>
</div>  `;
})
.join('');
}

// function onPaletteContainerClick(event){

// if(!event.target.classList.contains('color-swatch')){
//     return;
// }

// const currentActiveCard = document.querySelector('.color-card.is-active');
// if(currentActiveCard) {
//     currentActiveCard.classList.remove(is-active);
// }

// // const swatchEl = event.target.classList.add('is-active');
// const swatchEl = event.target;

// // const parentColorCars = swatchEl.parentNode;
// const parentColorCars = swatchEl.closest('.color-swatch');
// parentColorCars.classList.add('is-active');

// console.log(event.target.dataset.hex);

// document.body.style.backgroundColor = swatchEl.dataset.hex
// }


function onPaletteContainerClick(event){

    if(!event.target.classList.contains('color-swatch')){
        return;
    }
    
    
    
    // const swatchEl = event.target.classList.add('is-active');
    const swatchEl = event.target;
    const parentColorCars = swatchEl.closest('.color-swatch');

    removeActiveCardClass();
    addActiveCardClass(parentColorCards);
    setBodyBgColor(swatch.dataser.hex);
        
    }

    function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
    }
     
    function removeActiveCardClass() {
        const currentActiveCard = document.querySelector('.color-card.is-active');
        if(currentActiveCard) {
            currentActiveCard.classList.remove(is-active);
        }
     }
     
     function addActiveCardClass(card) {
        card.classList.add('is-active');

    }


