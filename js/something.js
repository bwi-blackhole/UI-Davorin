class Carousel {
    constructor(element){
        this.element = element
        this.box = element.querySelectorAll('.something-box')
        this.rBtn = element.querySelector('.right-button')
        this.lBtn = element.querySelector('.left-button')
        this.img = element.querySelector('.carousel-img')
        this.rBtn.addEventListener('click', () => {
            this.someFunc()
        })
        this.lBtn.addEventListener('click', () => {
            this.someFunc()
        })
    }
        someFunc() {
            if (Carousel.index > -1) {
            this.box[Carousel.index].classList.toggle('something-hidden')
            Carousel.index--
            }
            else Carousel.index = (Array.from(document.querySelectorAll('.something-box')).length) - 1
        
    }
}

Carousel.index = (Array.from(document.querySelectorAll('.something-box')).length) - 1

    



let rows = document.querySelectorAll('.rows').forEach(element => new Carousel(element))