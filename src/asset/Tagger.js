export class Tagger {
    eatenFeedsNumber = 0

    constructor(blocks, stageWidth, stageHeight, taggerWidth = 50, taggerHeight = 50, taggerSpeedX = 5, taggerSpeedY = 5) {
        this.vx = taggerSpeedX
        this.vy = taggerSpeedY

        this.taggerWidth = taggerWidth
        this.taggerHeight = taggerHeight
        this.x = Math.floor(Math.random() * (stageWidth - this.taggerWidth))
        this.y = Math.floor(Math.random() * (stageHeight - this.taggerHeight))
        
        this.setPosition(blocks, stageWidth, stageHeight)
    }

    setPosition(blocks) {
        for (let i = 0; i < blocks.length; i++) {
            const minX = this.x - this.radius - blocks[i].blockWidth
            const maxX = this.x + this.radius
            const minY = this.y - this.radius - blocks[i].blockHeight
            const maxY = this.y + this.radius
            if (blocks[i].x > minX && blocks[i].x < maxX && blocks[i].y > minY && blocks[i].y < maxY) {
                this.x = Math.floor(Math.random() * (stageWidth - this.taggerWidth))
                this.y = Math.floor(Math.random() * (stageHeight - this.taggerHeight))
                this.setPosition(blocks)
                return
            }
        }
    }

    draw(ctx, blocks, stageWidth, stageHeight) {
        this.x += this.vx
        this.y += this.vy

        const stageMinX = 0
        const stageMaxX = stageWidth - this.taggerWidth
        const stageMinY = 0
        const stageMaxY = stageHeight - this.taggerHeight
        
        if (stageMinX > this.x || stageMaxX < this.x) {
            this.vx *= -1
            this.x += this.vx
        }
        if (stageMinY > this.y || stageMaxY < this.y) {
            this.vy *= -1
            this.y += this.vy
        }

        for (let i = 0; i < blocks.length; i++) {
            const blockMinX = blocks[i].x - this.taggerWidth
            const blockMaxX = blocks[i].x + blocks[i].blockWidth
            const blockMinY = blocks[i].y - this.taggerHeight
            const blockMaxY = blocks[i].y + blocks[i].blockHeight
            if (this.x >= blockMinX && this.x <= blockMaxX && this.y >= blockMinY && this.y <= blockMaxY) {
                const x1 = Math.abs(this.x - blockMinX)
                const x2 = Math.abs(blockMaxX - this.x)
                const y1 = Math.abs(this.y - blockMinY)
                const y2 = Math.abs(blockMaxY - this.y)
                const min1 = Math.min(x1, x2)
                const min2 = Math.min(y1, y2)
                if (min1 <= min2) {
                    this.vx *= -1
                    this.x += this.vx
                } else {
                    this.vy *= -1
                    this.y += this.vy
                }
            }
        }
        
        ctx.fillStyle = '#5383e8'
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.taggerWidth, this.taggerHeight)
    }

    eatFeed(feed) {
        const stageMinX = (feed.x - feed.radius) - this.taggerWidth
        const stageMaxX = feed.x + feed.radius
        const stageMinY = (feed.y - feed.radius) - this.taggerHeight 
        const stageMaxY = feed.y + feed.radius

        if (stageMinX <= this.x && stageMaxX >= this.x && stageMinY <= this.y && stageMaxY >= this.y) {
            this.eatenFeedsNumber += 1
            return true
        } else return false
    }
}