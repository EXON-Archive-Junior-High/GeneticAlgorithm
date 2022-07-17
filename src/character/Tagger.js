export class Tagger {
    taggersSpeed = 5
    taggersHeight = 50
    taggersWidth = 50
    eatenFeedsNumber = 0

    constructor(stageWidth, stageHeight) {
        this.vx = this.taggersSpeed
        this.vy = this.taggersSpeed

        this.w = this.taggersWidth
        this.h = this.taggersHeight
        this.x = Math.floor(Math.random() * (stageWidth - this.w))
        this.y = Math.floor(Math.random() * (stageHeight - this.h))
    }

    draw(ctx, stageWidth, stageHeight) {
        this.x += this.vx
        this.y += this.vy

        const minX = 0
        const maxX = stageWidth - this.w
        const minY = 0
        const maxY = stageHeight - this.h
        
        if (minX > this.x || maxX < this.x) {
            this.vx *= -1
            this.x += this.vx
        }
        if (minY > this.y || maxY < this.y) {
            this.vy *= -1
            this.y += this.vy
        }

        ctx.fillStyle = '#5383e8'
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    eatFeed(feed) {
        const minX = (feed.x - feed.radius) - this.taggersWidth
        const maxX = feed.x + feed.radius
        const minY = (feed.y - feed.radius) - this.taggersHeight 
        const maxY = feed.y + feed.radius

        if (minX <= this.x && maxX >= this.x && minY <= this.y && maxY >= this.y) {
            this.eatenFeedsNumber += 1
            return true
        } else return false
    }
}