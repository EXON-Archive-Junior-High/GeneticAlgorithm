export class Tagger {
    eatenFeedsNumber = 0

    constructor(stageWidth, stageHeight, taggerWidth = 50, taggerHeight = 50, taggerSpeedX = 5, taggerSpeedY = 5) {
        this.vx = taggerSpeedX
        this.vy = taggerSpeedY

        this.taggerWidth = taggerWidth
        this.taggerHeight = taggerHeight
        this.x = Math.floor(Math.random() * (stageWidth - this.taggerWidth))
        this.y = Math.floor(Math.random() * (stageHeight - this.taggerHeight))
    }

    draw(ctx, stageWidth, stageHeight) {
        this.x += this.vx
        this.y += this.vy

        const minX = 0
        const maxX = stageWidth - this.taggerWidth
        const minY = 0
        const maxY = stageHeight - this.taggerHeight
        
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
        ctx.fillRect(this.x, this.y, this.taggerWidth, this.taggerHeight)
    }

    eatFeed(feed) {
        const minX = (feed.x - feed.radius) - this.taggerWidth
        const maxX = feed.x + feed.radius
        const minY = (feed.y - feed.radius) - this.taggerHeight 
        const maxY = feed.y + feed.radius

        if (minX <= this.x && maxX >= this.x && minY <= this.y && maxY >= this.y) {
            this.eatenFeedsNumber += 1
            return true
        } else return false
    }
}