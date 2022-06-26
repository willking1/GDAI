class Block {
    constructor(horizon, x, y, width, height) {
        this.horizon = horizon;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillStyle = "grey";
        ctx.fillRect(this.x, this.horizon-this.y-this.height, this.width, this.height);
    }
}