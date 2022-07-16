import { Tagger } from './character/Tagger.js'

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        this.tagger = new Tagger(this.stageWidth, this.stageHeight, 5, 100, 100, 50, 50)
        
        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        window.requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight
        this.canvas.setAttribute("width", window.innerWidth)
        this.canvas.setAttribute("height", window.innerWidth)
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this))

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        
        this.tagger.draw(this.ctx)
    }
}


window.onload = () => {
    new App()
}