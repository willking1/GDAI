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

        // draw spikes
        for(let i=0; i<this.objects.length; i++) {
            if(this.objects[i].x < canvas.width) {
                this.objects[i].draw();
            }
        }
    }

    move() {
        console.log(this.isTouchingGround());
        if(!this.isTouchingGround()) {
            this.player.speed -= 0.05;
        } else if(this.player.speed < 0) {
            this.player.speed = 0;
        }
        this.player.y+=this.player.speed;
        for(let i=0; i<this.objects.length; i++) {
            this.objects[i].x--;
        }
    }

    isTouchingGround() {
        //check if player is touching any objects
        for(let i=0; i<this.objects.length; i++) {
            //check if player x position aligns with any object x positions
            if((this.player.x > this.objects[i].x && this.player.x < this.objects[i].x+this.objects[i].width) || (this.player.x+this.player.width > this.objects[i].x && this.player.x+this.player.width < this.objects[i].x+this.objects[i].width)) {
                //check if player y is at same height as block
                if(this.player.y <= 0.05+this.objects[i].y+this.objects[i].height) {
                    return true;
                }
            }
        }
        //check if player is touching main ground level
        if(this.player.y <= 0.05) {
            return true;
        } 
        return false;
    }

    map() {

        this.startX = 1500;

        // spikes
        this.objects.push(new Spike(this.horizon, this.startX+50, 0, 50, 50));
        this.objects.push(new Spike(this.horizon, this.startX+100, 0, 50, 50));
        this.objects.push(new Spike(this.horizon, this.startX+150, 0, 50, 50));
        
        // blocks
        this.objects.push(new Block(this.horizon, this.startX, 0, 50, 50));
        this.objects.push(new Block(this.horizon, this.startX+200, 0, 50, 50));
    }

    jump() {
        if(this.player.speed == 0) this.player.speed = 5;
    }

    run() {
        this.draw();
        this.move();
    }
}