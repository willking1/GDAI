let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let gameID;
let game = new Game();

let started = false;

function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setup();

function start() {
    gameID = setInterval(update);
}

function update() {
    game.run();
}

canvas.addEventListener("click", () => {
    if(!started) {
        start();
        started = true;
    } else {
        game.jump();   
    }
})

