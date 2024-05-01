window.onload = function (){
    const startButton = document.getElementById("start-button");
    const musicButton = document.getElementById("music-button");

    let game;

    startButton.addEventListener("click", () => {
        game = new Game();
        game.start();
    });

    musicButton.addEventListener("click", function() {
        let text = this.innerText;
        this.innerText = text === 'Music on 🎶' ? 'Music off 🔇' : 'Music on 🎶';
    });

    const speed = 10;

    document.querySelector('#game-screen').addEventListener('mousemove', (e) => {
        game.player.positionX = e.clientX;
        console.log(e);
        console.log(player);
    }, false)

}