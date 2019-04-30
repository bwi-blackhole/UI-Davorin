class Carousel {
    constructor(element){
   
        this.element = element
        
        this.box = this.element.querySelector('.something-box')

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
            let i = 0
            this.box.classList.toggle('something-hidden')
            alert(i)
            return i++
            
        }
    }



let rows = document.querySelectorAll('.rows').forEach(element => new Carousel(element))