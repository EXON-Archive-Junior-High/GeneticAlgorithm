import { Tagger } from './character/Tagger.js'
import { Feed } from './character/Feed.js'

class App {
    taggersNumber = 40
    feedsNumber = 30
    generationCycle = 500
    greatTaggersNumber = 4
    frame = 0
    generation = 0

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        this.taggers = []
        for (let i = 0; i < this.taggersNumber; i++) {
            const width = Math.floor(Math.random() * 30)
            const height = Math.floor(Math.random() * 30)
            const speedX = Math.floor(Math.random() * 10)
            const speedY = Math.floor(Math.random() * 10)
            this.taggers.push(new Tagger(this.stageWidth, this.stageHeight, width, height, speedX, speedY))
        }

        this.feeds = []
        for (let i = 0; i < this.feedsNumber; i++) {
            this.feeds.push(new Feed(this.stageWidth, this.stageHeight))
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

        this.frame++

        if (this.frame >= this.generationCycle) {
            console.log(`${this.generation}세대`)
            this.taggers.sort((a, b) => {
                return b.eatenFeedsNumber - a.eatenFeedsNumber
            })
            this.taggers = this.taggers.slice(0, this.greatTaggersNumber)
            for (let i = 0; i < this.greatTaggersNumber; i++) {
                this.taggers[i].eatenFeedsNumber = 0
            }
            let j = 0
            for (let i = 0; i < this.taggersNumber - this.greatTaggersNumber; i++) {
                if (j >= this.greatTaggersNumber) j = 0
                const width = this.taggers[j].taggerWidth + Math.floor(Math.random() * 20) - 10 // +- 10
                const height = this.taggers[j].taggerHeight + Math.floor(Math.random() * 20) - 10 // +- 10
                const speedX = this.taggers[j].vx + Math.floor(Math.random() * 2) - 4 // +- 2
                const speedY = this.taggers[j].vy + Math.floor(Math.random() * 2) - 4 // +- 2
                this.taggers.push(new Tagger(this.stageWidth, this.stageHeight, width, height, speedX, speedY))
                j += 1
            }
            this.frame = 0
            this.generation += 1
            const text = document.getElementById('generation')
            text.innerText = `${this.generation} 세대`
        }

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        
        for (let i = 0; i < this.taggersNumber; i++) {
            this.taggers[i].draw(this.ctx, this.stageWidth, this.stageHeight)
        }

        this.ctx.fillStyle = '#d55252'
        for (let i = 0; i < this.feedsNumber; i++) {
            this.feeds[i].draw(this.ctx, this.stageWidth, this.stageHeight)
        }

        for (let i = 0; i < this.taggersNumber; i++) {
            for (let j = 0; j < this.feedsNumber; j++) {
                const ifEat = this.taggers[i].eatFeed(this.feeds[j])
                if (ifEat) {
                    this.feeds.splice(j, 1)
                    this.feeds.push(new Feed(this.stageWidth, this.stageHeight))
                }
            }
        }
    }
}


window.onload = () => {
    new App()
}