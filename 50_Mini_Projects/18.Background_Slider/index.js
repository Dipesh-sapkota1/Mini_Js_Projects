const slides = document.querySelectorAll('.slide');
const btnRight = document.getElementById('right');
const btnLeft = document.getElementById('left');
const body = document.body;
let activeSlides = 0;


setBg();

setActive();



btnRight.addEventListener('click',()=> {
    activeSlides++;
   if(activeSlides > slides.length - 1){
    activeSlides = 0
   }
    setBg();
    setActive();

});
btnLeft.addEventListener('click',()=> {
    activeSlides--;
    if(activeSlides < 0){
        activeSlides = slides.length - 1;
    }
    setBg();
    setActive();
});

function setBg(){
    body.style.backgroundImage = slides[activeSlides].style.backgroundImage;
}

function setActive(){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlides].classList.add('active');
}