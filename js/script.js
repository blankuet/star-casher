window.onload = function (){
    const startButton = document.getElementById("start-button");
    const musicButton = document.getElementById("music-button");

    let game;

    startButton.addEventListener("click", () => {
        game = new Game();
        game.start();
    });

    musicButton.addEventListener("click", () => {
        musicButton.textContent = "Music off 🔇";
        //PENDING HOW TO CHANGE IT BACK TO 
    });
}