/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// The class should include a constructor that initializes the following properties

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase ('The game is hard'),
            new Phrase ('who won the game'),
            new Phrase ('Hola'),
            new Phrase ('Selam'),
            new Phrase ('Try it again')
        ];
        this.activePhrase = null;

    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    
    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };

    handleInteraction(button) {
        button.disabled = true;
        let buttonPressed = button.textContent;
    
        if (!this.activePhrase.checkLetter(buttonPressed)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList = '';
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(buttonPressed);
            if (this.checkForWin() === true) {
                console.log('game won');
                this.gameOver(true);
            }
        }
    }

    removeLife() {
        const liveHearts = document.querySelectorAll('.tries img');
        liveHearts[this.missed].src = 'images/lostHeart.png';
        if (this.missed < 4) {
            //tries.src = 'images/lostHeart.png';
            this.missed++;
        } else if (this.missed === 4) {
            this.gameOver(false);
        }
    } 
    
    checkForWin() {
        let activePhrase = this.activePhrase.phrase;
        console.log(activePhrase);
        activePhrase = activePhrase.split(' ').join('').length;
        console.log(activePhrase);
        const show = document.querySelectorAll('.show').length;
        console.log(show);
        return activePhrase === show;
   
    }

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
   
        if (gameWon) {
           overlay.classList = 'win';
           message.innerHTML = 'Congrats';
        } else {
            overlay.classList = 'lose';
            message.innerHTML = 'Good luck next time';
        }
        overlay.style.display = 'flex';
        this.resetGame();
    }
   
    resetGame(){
        const lifes = document.querySelectorAll('.tries img');
        const keyboards = document.querySelectorAll('.key, .chosen, .wrong');
        const phrase = document.querySelector('#phrase');
   
        this.missed = 0;
        keyboards.forEach(key =>{key.classList = 'key'; key.disabled = false;});
        lifes.forEach(life => life.src = 'images/liveHeart.png');
        phrase.innerHTML = "<ul></ul>";
   
    }
}





 

 

 