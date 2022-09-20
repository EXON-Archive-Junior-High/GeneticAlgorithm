export class Feed {
    radius = 5

    constructor(stageWidth, stageHeight) {
        this.stageWidth = stageWidth
        this.stageHeight = stageHeight
        this.x = Math.floor(Math.random() * (this.stageWidth - this.radius))
        this.y = Math.floor(Math.random() * (this.stageHeight - this.radius))
    }

    draw(ctx, blocks) {
        for (let i = 0; i < blocks.length; i++) {
            const minX = this.x - this.radius - blocks[i].blockWidth
            const maxX = this.x + this.radius
            const minY = this.y - this.radius - blocks[i].blockHeight
            const maxY = this.y + this.radius
            if (blocks[i].x > minX && blocks[i].x < maxX && blocks[i].y > minY && blocks[i].y < maxY) {
                this.x = Math.floor(Math.random() * (this.stageWidth - this.radius))
                this.y = Math.floor(Math.random() * (this.stageHeight - this.radius))
                this.draw(ctx, blocks)
                return
            }
        }
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
    }
}