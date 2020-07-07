// import functions and grab DOM elements
import compare from './comparing.js';
 
// initialize state
// grabbing the the users guess in input
const userInput = document.querySelector('#input-guess');
// grabbing the button
const submitUserGuess = document.querySelector('#submit-guess');
//grabbing the span element for remaining guesses
const guessesRemaining = document.querySelector('#remaining-guesses');
// grabbing the span element where the user will be told if guess was to low or to high
const guessIs = document.querySelector('#guess-is');

// setting the random number
const randomNumber = Math.ceil(Math.random() * 20);
// setting the amount of tries left
let numOfGuesses = 3;

submitUserGuess.addEventListener('click', () => {
    // grabbing user number guess
    const userSubmission = Number(userInput.value);
    console.log(userSubmission);
})
