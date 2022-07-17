export class Tagger {
    constructor(speed, x, y, w, h) {
        this.vx = speed
        this.vy = speed

        this.x = x
        this.y = y
        this.w = w
        this.h = h
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
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}