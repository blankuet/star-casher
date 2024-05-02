class Player {
    constructor(gameScreen, left, bottom, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.positionX = 0;

        //Properties of Player img
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.bottom = `${bottom}px`;

        //Append to HTML
        this.gameScreen.appendChild(this.element);

    }

    move() {
        // Update player's raccoon position based on directionX and positionX (mouse position)
        this.bottom += this.directionY;
        this.left = this.positionX;
        
        // Ensure the player stays within the game screen
        // handles left hand side
        if (this.left < 10) {
        this.left = 10;
        }
        // handles bottom side
        if (this.bottom < 10) {
        this.bottom = 10;
        }
        // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
        // handles bottom side
        if (this.bottom > this.gameScreen.offsetHeight - this.height - 10) {
        this.bottom = this.gameScreen.offsetHeight - this.height - 10;
        }

        // Update the player's position on the screen  
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.bottom = `${this.bottom}px`;
    }   
    
    didCollide (obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            console.log('crashing')
            return true;
        } else {
            return false;
        }
    }

    /* didCatch (star) {
        const playerRect = this.element.getBoundingClientRect();
        const starRect = star.element.getBoundingClientRect();

    } */
}
