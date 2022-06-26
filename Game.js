class Game {
    
    constructor() {
        this.horizon = canvas.height * 0.5;
        this.player = new Player(50, 50);
        this.spikes = [new Spike(800, this.horizon, 30, 30)];
    }

    run() {
        this.draw();
        this.move();
    }

    draw() {  
        // repaint
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, this.horizon, canvas.width, 5);

        // draw player
        this.player.draw();

        //draw spikes
        for(let i=0; i<this.spikes.length; i++) {
            this.spikes[i].draw();
        }
    }

    jump() {
        this.player.speed = 10;
    }

    move() {
        if(this.player.speed != 0) {
            this.player.y+=this.player.speed;
            this.player.speed--;
            if(this.player.speed == -10) this.player.speed = 0;
        }
        for(let i=0; i<this.spikes.length; i++) {
            this.spikes[i].x--;
        }
    }
}