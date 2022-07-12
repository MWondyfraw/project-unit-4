/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.querySelector('#btn__reset').addEventListener('click',(e) =>{
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }

});

document.addEventListener('keyup', e => {
    const keyboard = document.querySelectorAll('.key');
    keyboard.forEach(button => {
        if (e.key === button.textContent && button.className === 'key'){
            game.handleInteraction(button);

        }

    });

});