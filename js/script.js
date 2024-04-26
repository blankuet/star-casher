window.onload = function (){
    const startButton = document.getElementById("start-button");
    const musicButton = document.getElementById("music-button");

    let game;

    startButton.addEventListener("click", function() {
        startGame();
    });

    function startGame(){
        game = new Game();
        game.start();
    }

    musicButton.addEventListener("click", function() {
        musicButton.textContent = "Music off 🔇";
        //PENDING HOW TO CHANGE IT BACK TO 
    });
}