class Game {
    
    constructor() {
        this.player = new Player(50);
        this.playerX = 300;
        this.playerY = this.player.y;
    }

    draw() {  
        //draw player
        ctx.fillStyle = "blue";
        ctx.fillRect(this.playerX, this.playerY, this.player.width, this.player.height);
    }
}