window.onload = function (){
    const startButton = document.getElementById("start-button");
    const musicButton = document.getElementById("music-button");
    const restartButton = document.getElementById("restart-button");

    let game;

    startButton.addEventListener("click", () => {
        game = new Game();
        game.start();
    });

    musicButton.addEventListener("click", function() {
        let text = this.innerText;
        this.innerText = text === 'Music on 🎶' ? 'Music off 🔇' : 'Music on 🎶';
    
    
    });
       

    restartButton.addEventListener("click", function () {
        location.reload();
    });

    document.querySelector('#game-container').addEventListener('mousemove', (e) => {
        game.player.positionX = e.clientX - 250;
    }, false)

}