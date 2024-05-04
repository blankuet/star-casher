window.onload = function (){
    const startButton = document.getElementById("start-button");
    const musicButton = document.getElementById("music-button");
    const restartButton = document.getElementById("restart-button");
    const audio = document.getElementById("audio");
    let audioIsOn = true;
    let game;

    startButton.addEventListener("click", () => {
        game = new Game();
        game.start();
    });

    musicButton.addEventListener("click", function() {
        audioIsOn = !audioIsOn;
        console.log(audioIsOn);
        if (audioIsOn){
            audio.play();
            musicButton.innerHTML = 'Music on 🎶';
        } else {
            audio.pause();
            musicButton.innerHTML = 'Music off 🔇'
        }
    
    });
       

    restartButton.addEventListener("click", function () {
        location.reload();
    });

    document.querySelector('#game-screen').addEventListener('mousemove', (e) => {
        game.player.positionX = e.clientX - 150;
    }, false)

}