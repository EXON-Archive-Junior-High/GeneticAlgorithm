export class Tagger {
    constructor(stageWidth, stageHeight, speed, x, y, w, h) {
        this.vx = speed
        this.vy = speed

        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.stageWidth = stageWidth
        this.stageHeight = stageHeight
    }

    draw(ctx) {
        this.x += this.vx
        this.y += this.vy

        const minX = this.w
        const maxX = this.stageWidth - this.w
        const minY = this.h
        const maxY = this.stageHeight - this.h
        
        if (minX > this.x || maxX < this.x) {
            this.vx *= -1
            this.x += this.vx
        }
        if (minY > this.y || maxY < this.y) {
            this.vy *= -1
            this.y += this.vy
        }

        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}