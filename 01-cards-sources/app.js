function sliderPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            ClearActiveClasses()
            slide.classList.add('active')

        })
    }

    function ClearActiveClasses() {
        slides.forEach( (slide)=> {
            slide.classList.remove('active')
        } )
    }
}

sliderPlugin(0)

