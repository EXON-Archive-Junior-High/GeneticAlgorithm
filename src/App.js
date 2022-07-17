import { Tagger } from './character/Tagger.js'

class App {
    taggersNumber = 5

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        this.taggers = []
        for (let i = 0; i < this.taggersNumber; i++) {
            this.taggers.push(new Tagger(this.stageWidth, this.stageHeight))
        }
        
        window.requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2, 2)
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        
        for (let i = 0; i < this.taggersNumber; i++) {
            this.taggers[i].draw(this.ctx, this.stageWidth, this.stageHeight)
        }
    }
}


window.onload = () => {
    new App()
}