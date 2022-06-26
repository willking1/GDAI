class Player {
    constructor(horizon, width, height) {
        this.horizon = horizon;
        this.x = canvas.width * 0.5 - width * 0.5 - 300;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.speed = 0;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.horizon-this.y-this.height, this.width, this.height);
    }
}