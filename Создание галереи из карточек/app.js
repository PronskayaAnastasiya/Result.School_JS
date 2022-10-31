function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasse();
            slide.classList.add('active')
        })
    }

    function clearActiveClasse() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin();