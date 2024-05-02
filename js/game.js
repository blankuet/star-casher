class Game {
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-screen');
        this.gameContainer = document.querySelector('#game-container');
        this.endScreen = document.querySelector('#game-end');
        this.height = 1000;
        this.width = 1600;
        this.obstacles = [];
        this.stars = [];
        this.score = 0;
        this.lives = 3;
        this.currentTime = 0;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.counter = 0;
        this.generationSpeed = 60;
        this.gameLoopFrequency = Math.round(1000/60);

        this.player = new Player(this.gameScreen, 0, 0, 200, 300, "./images/raccoon.png");        

    }

    start() {
        //Hide START SCREEN + show GAME SCREEN & STATS
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameContainer.style.display = 'flex';

        //Setting high and width of GAME SCREEN
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        //Program interval
        this.gameIntervalId = setInterval(() => {
        this.gameLoop();
        }, this.gameLoopFrequency);
    }

    gameLoop() {
        this.update();
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    };

    update() {
        this.counter++;
        this.player.move();

        if (this.counter % this.generationSpeed === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen))
        }
        if (this.counter % this.generationSpeed === 0) {
        this.stars.push(new Star(this.gameScreen))
        }
    };
}