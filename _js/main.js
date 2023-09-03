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


function main(){
    sayHello();

    getRandomWord();
    firstLetter();
    
    
    sayGoodbye();
}
    
main();

}
);