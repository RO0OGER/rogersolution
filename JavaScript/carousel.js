let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
}

function autoMoveCarousel() {
    currentSlide++;
    showSlide(currentSlide);
    setTimeout(autoMoveCarousel, 3000); 
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setTimeout(autoMoveCarousel, 3000); 
});
