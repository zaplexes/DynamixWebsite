const wrapper = document.querySelector('#carousel-wrapper');

const previous = wrapper.children[0];
const next = wrapper.children[2];

const carousel = wrapper.children[1];

const pages = [];

let current_page = 0;

let valid_page;

let timeoutId;

let last_page = 0;

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

previous.addEventListener('click', () => {
    current_page -= 1;
    current_page = changePage(current_page)
});
next.addEventListener('click', () =>{
    current_page += 1;
    current_page = changePage(current_page)
});

function startLoop(){
    timeoutId = setTimeout(nextSlide, 5000)
}

function nextSlide() {
    current_page = (current_page + 1) % pages.length
    changePage(current_page)
    startLoop();
}
function resetTimer(){
    clearTimeout(timeoutId)
    startLoop();
}

function addCarouselImages(total_images){
    for (i = 1; i <= total_images; i++){
        pages.push('carousel' + (i));
    };
};

function changePage(current_page){
     if (isInBound(current_page) == "below"){
        carousel.children[last_page].style.opacity = '0'
        carousel.children[pages.length -1].style.opacity = '1'
        last_page = pages.length -1
        return last_page
    }
    else if (isInBound(current_page) == "above"){
        carousel.children[last_page].style.opacity = '0'
        carousel.children[0].style.opacity = '1'
        last_page = 0
        return last_page
    }
    else{
        carousel.children[last_page].style.opacity = '0'
        carousel.children[current_page].style.opacity = '1'
        last_page = current_page
        return last_page
    }
}

function isInBound(current_page){
    if (current_page < 0){
        return "below"
    }
    else if (current_page > pages.length -1){
        return "above"
    }
    else{
        return "inBounds"
    }
}

function createSlides(){
    for (i in pages){
        let image = pages[i];
        const slide = document.createElement("div");
        slide.classList.add("slide")
        carousel.appendChild(slide)
        slide.style.backgroundImage = `url(./assets/images/carousel/${image}.jpg)`;
    }
}

addCarouselImages(8)
createSlides()
carousel.children[0].style.opacity = '1';

startLoop();
