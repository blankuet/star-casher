class Game {
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-screen');
        this.gameContainer = document.querySelector('#game-container');
        this.endScreen = document.querySelector('#game-end');
        this.height = 90;
        this.width = 100;
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

        this.player = new Player(this.gameScreen, 0, -20, 150, 180, "./images/raccoon.png");        

    }

    start() {
        //Hide START SCREEN + show GAME SCREEN & STATS
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameContainer.style.display = 'flex';

        //Setting high and width of GAME SCREEN
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}%`;

        //Program interval
        this.gameIntervalId = setInterval(() => {
        this.gameLoop();
        }, this.gameLoopFrequency);
    }

    gameLoop() {
        this.update();
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            this.gameScreen.style.display = "none";
            this.endScreen.style.display = "block";
        }
    };

    update() {

        /* Adding obstacles + removing them when out of screen */
        this.counter++;
        this.obstacles.forEach((obstacle, index) => {
        obstacle.move();
        if (obstacle.top === this.gameScreen.offSetHeight - 10) {
            this.obstacles.splice(index, 1);
            obstacle.element.remove();
        }

        /* Detect if collides, if true, remove element and reduce 1 live */
        if (this.player.didCollide(obstacle)) {
            console.log('collide')
            //Remove obstacle from DOM
            obstacle.element.remove();
            //Remove obstacle obj from array
            this.obstacles.splice(index, 1);
            //Reduce player's lives by 1
            this.lives--;
            this.updateLiveCounter();
            if (this.lives === 0) this.gameIsOver = true;
            if (this.gameIsOver) this.gameContainer.style.display = 'inline';
        }
        });
        /* Adding stars + removing them when out of screen */
        this.stars.forEach((star, index) => {
            star.move();
        if (star.top === this.gameScreen.offSetHeight - 10) {
            this.stars.splice(index, 1);
            star.element.remove();
        }
        /* Detect if collides with star, if true, remove element and add 1 point to */
        if (this.player.didCatch(star)) {
            console.log('star')
            //Remove star from DOM
            star.element.remove();
            //Remove star obj from array
            this.stars.splice(index, 1);
            //Add 1 point to score
            this.score++;
            const scoreCounter = this.gameContainer.querySelector("#score");
            scoreCounter.innerHTML = this.score;
            if(this.score % 5 === 0) this.lives++;
            this.updateLiveCounter();
        }
        });
        
        this.player.move();

        if (this.counter % this.generationSpeed === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.stars.push(new Star(this.gameScreen));
    }
        if (this.counter === 1000) {
            this.generationSpeed = 45;
        }
    };

    updateLiveCounter() {
    const livesCounter = this.gameContainer.querySelector("#lives");
    livesCounter.innerHTML = this.lives;
    }
}