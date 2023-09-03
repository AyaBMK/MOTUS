"use strict";


const WORDLIST = ["soleil", "banane", "orange", "fraise", "maison"];
const MAXATTEMPTS = 10;
let attempts = 0;
var randomWord;

window.addEventListener("DOMContentLoaded", function() {
let letterColumn = document.querySelectorAll('.letter-column');
// let guessForm = document.querySelector('.guess-form');
let guessButton = document.querySelector('#guess-button')
let guessInput = document.querySelector('#guess-input');
let message = document.querySelector('.msg');


let currentGuess = guessInput.value; 

function getRandomWord(){
    return WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
    
}

function firstLetter(){
    
    randomWord = getRandomWord();
    letterColumn[0].textContent = randomWord[0];

}

function guessedWord() {
    let i = 0;
    currentGuess = guessInput.value;
    while (i < currentGuess.length) {
        letterColumn[i].textContent = currentGuess[i];
        i++;
    }
}

function misPlaced(randomWord, currentGuess) {
    let i = 0;
    while (i < currentGuess.length) {
      if (randomWord[i] !== currentGuess[i] && randomWord.includes(currentGuess[i])) {
          letterColumn[i].classList.replace('not-present', 'misplaced');
          letterColumn[i].classList.replace('wellplaced', 'misplaced');
      } else {
          letterColumn[i].classList.replace('misplaced', 'not-present');
      }
      i++;
  }
}
  
function wellPlaced(randomWord, currentGuess) {
    let i = 0;
    while (i < randomWord.length) {
      if (randomWord[i] === currentGuess[i]) {
          letterColumn[i].classList.replace('not-present', 'wellplaced');
          letterColumn[i].classList.replace('misplaced', 'wellplaced');
      } else {
          letterColumn[i].classList.replace('wellplaced', 'not-present');
      }
      i++;
  }
}

function checkPlayerInput(event) {
    event.preventDefault();
    attempts++;
  
    currentGuess = guessInput.value; 
    // WORDLIST.push(currentGuess); 
  
    if (currentGuess === randomWord) {
      message.textContent = 'Félicitations! Vous avez deviné le mot. ';
      guessedWord();
      wellPlaced(randomWord, currentGuess);
    } else {
      if (attempts >= MAXATTEMPTS) {
        message.textContent = 'Game over. Le mot était : ' + randomWord + '.';
        guessedWord();
      } else {
        message.textContent = 'Réessayez, il vous reste ' + (MAXATTEMPTS - attempts)   + ' tentatives ';
        guessedWord();
        wellPlaced(randomWord, currentGuess);
        misPlaced(randomWord, currentGuess);
      }
    }
}


function main(){
    sayHello();

    getRandomWord();
    firstLetter();
    guessButton.addEventListener('click',checkPlayerInput);
    
    
    sayGoodbye();
}
    
main();

}
);