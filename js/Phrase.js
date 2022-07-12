/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// The class should include a constructor that receives a phrase parameter and initializes the following properties

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    
    // Display when the game starts
    addPhraseToDisplay() {
        const phrase = this.phrase;
        console.log(phrase);
        const ul = document.querySelector('#phrase ul');
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i] !== ' ') {
                const li = document.createElement("li");
                li.className = `hide letter ${phrase[i]}`;
                li.textContent = phrase[i];
                ul.appendChild(li); 
            } else {
    
                const emptyLi = document.createElement("li");
                emptyLi.className = 'space';
                emptyLi.textContent = phrase[i];
                ul.appendChild(emptyLi); 
            }
        }
    }
    
    // checks to see if the letter selected by the player matches a letter in the phrase.
    
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // Reveals the letter(s) on the board that matches the player's selection

    showMatchedLetter(letter) {
    let li = document.querySelectorAll('#phrase li');
    for (let i = 0; i < li.length; i++) {
        if (li[i].textContent.includes(letter)) {
            li[i].classList.remove('hide');
            li[i].classList.add('show');
        }
    }
}
};






