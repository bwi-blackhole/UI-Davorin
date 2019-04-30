class Carousel {
    constructor(element){
        this.element = element
        this.rBtn = element.querySelector('.right-button')
        this.lBtn = element.querySelector('.left-button')
        this.img = element.querySelector('.carousel-img')
        
        this.rBtn.addEventListener('click', () => {
            this.someFunc()
        })
        
        this.lBtn.addEventListener('click', () => {
            this.someFunc()
        })

        someFunc() {
            
        }
    }

}