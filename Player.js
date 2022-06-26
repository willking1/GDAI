class Player {
    constructor(width, height) {
        this.x = canvas.width * 0.5 - width * 0.5 - 300;
        this.y = canvas.height * 0.5 - height * 0.5;
        this.width = width;
        this.height = height;
        this.speed = 0;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}