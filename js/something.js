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
            alert(Array.from(this.box)
    }
}
    



let rows = document.querySelectorAll('.rows').forEach(element => new Carousel(element))