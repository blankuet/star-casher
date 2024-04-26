class Game {
    constructor() {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-screen');
        this.endScreen = document.querySelector('#game-end');
    }

    start() {
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
    }
}