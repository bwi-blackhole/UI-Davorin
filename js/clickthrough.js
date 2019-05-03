class Clickthrough {
    constructor(element, index){
        this.index = index
        this.element = element
        this.rBtn = element.querySelector('.right-button')
        this.lBtn = element.querySelector('.left-button')
        this.img = element.querySelector('.carousel-img')

        this.lBtn.addEventListener('click', () => {
            this.someFunc()           
        })

        this.lBtn.addEventListener('click', () => {
            this.someFunc2()
        })

        this.rBtn.addEventListener('click', () => {
            this.someFunc()
        })
        
        this.rBtn.addEventListener('click', () => {
            this.someFunc2()
        })
    }
        someFunc() {
                const boxes = document.querySelectorAll('.feature-box')
                boxes.forEach(element => element.classList.remove('feature-selected'))

                boxes[this.index].classList.add('feature-selected')
                
                this.index++
                if (this.index > Array.from(boxes).length - 1) {
                    this.index = 0
                }
                
                else return this.index 
        }

        someFunc2() {
            document.querySelector('.feature-title').classList.add('feature-title-hidden')
            document.querySelector('.feature-title').classList.remove('feature-title')
        }
    }
 
let rows = document.querySelectorAll('.rows').forEach(element => new Clickthrough(element, 0)) 