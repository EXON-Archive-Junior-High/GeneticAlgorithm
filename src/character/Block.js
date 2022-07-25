class Block {
    blockWidth = 20
    blockHeight = 20

    constructor(stageWidth, stageHeight) {
        this.x = Math.floor(Math.random() * (stageWidth - this.blockWidth))
        this.y = Math.floor(Math.random() * (stageHeight - this.blockHeight))
    }

    draw(ctx) {
        ctx.fillStyle = '#00ff80'
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.blockWidth, this.blockHeight)
    }
}