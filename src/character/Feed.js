export class Feed {
    radius = 5
    constructor(stageWidth, stageHeight) {
        this.x = Math.floor(Math.random() * (stageWidth - this.radius))
        this.y = Math.floor(Math.random() * (stageHeight - this.radius))
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
    }
}