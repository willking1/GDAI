class Game {
    
    constructor() {
        this.horizon = canvas.height * 0.5;
        this.player = new Player(this.horizon, 50, 50);
        this.objects = [];
        this.map();
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
        for(let i=0; i<this.objects.length; i++) {
            if(this.objects[i].x < canvas.width) {
                this.objects[i].draw();
            }
        }
    }

    move() {
        if(this.player.speed != 0) {
            this.player.y+=this.player.speed;
            this.player.speed--;
            if(this.player.speed == -10) this.player.speed = 0;
        }
        for(let i=0; i<this.objects.length; i++) {
            this.objects[i].x--;
        }
    }

    map() {
        this.objects.push(new Spike(this.horizon, 1000, 0, 50, 50));
        this.objects.push(new Spike(this.horizon, 1100, 0, 50, 50));
        this.objects.push(new Spike(this.horizon, 1200, 0, 50, 50));
    }

    jump() {
        this.player.speed = 10;
    }

    run() {
        this.draw();
        this.move();
    }
}