import compare from './comparing.js';
 // grabbing the the users guess in input
const userInput = document.getElementById('input-guess');
// grabbing the button
const submitUserGuess = document.getElementById('submit-guess');
//grabbing the span element for remaining guesses
const guessesRemaining = document.getElementById('remaining-guesses');
// grabbing the span element where the user will be told if guess was to low or to high
const guessIs = document.getElementById('guess-is');
// grabbing the reset or play again button
const resetPlayAgain = document.getElementById('reset-game');
// grabs winner screen
const winnerPrompt = document.getElementById('hide-winner');
// grabs losing screen
const losingPrompt = document.getElementById('hide-lost');
// grabs classes to hide
const hide1 = document.getElementById('hide-1');
// grabs classes to hide
const hide2 = document.getElementById('hide-2');
// grabs span on reset button
const resetSpan = document.getElementById('reset-msg');
// setting the random number
const randomNumber = Math.ceil(Math.random() * 20);
// setting the amount of tries left
let numOfGuesses = 3;

submitUserGuess.addEventListener('click', () => {
    // grabbing user number guess
    const userSubmission = Number(userInput.value);
    // making sure that the user input is within the parameters
    if (userSubmission > 20 || userSubmission <= 0) {
        alert('ALERT ALERT! USER MUST ENTER A NUMBER BETWEEN 1 AND 20. YOU CAN ALSO CHOOSE 1 OR 20!');
        return;
    }
    // time to compare the numbers
    const compareTheNums = compare(userSubmission, randomNumber);

    // This happens when the user wins
    function winner() {
        winnerPrompt.classList.remove('hidden-winner');
        resetPlayAgain.classList.remove('hidden');
        hide1.classList.add('hide-all');
        hide2.classList.add('hide-all');
        resetSpan.textContent = 'Play Again?';
    }
    // this happens when the user loses
    function nonWinner() {
        losingPrompt.classList.remove('hidden-lost');
        resetPlayAgain.classList.remove('hidden');
        hide1.classList.add('hide-all');
        hide2.classList.add('hide-all');
        resetSpan.textContent = 'Try Again?';
    }
    // this is the process of removing guesses for each wrong guess eventually missing 4 then user loses
    function takeAwayGuesses() {
        numOfGuesses--;
        if (numOfGuesses <= 0) {
            nonWinner();
        }
    }
    // this happens when a guess is either too low or too high
    function tooLowTooHigh(toowhat) {
        guessesRemaining.textContent = `${numOfGuesses} attempts remaining`;
        guessIs.textContent = `Your guess was ${toowhat}.`;
    }
    //this next part evaluates the result of compareTheNums and assigns the functions stated above accordingly
    switch (compareTheNums) {
        case 0:
            winner();
            break;
        case 1:
            takeAwayGuesses();
            tooLowTooHigh('too high');
            break;
        case -1:
            takeAwayGuesses();
            tooLowTooHigh('too low');
            break;
        default:
            alert('The computers are confused refresh and try again.');
    }
    
    // if (compareTheNums === 0) {
    //     winner();
    // } else if (compareTheNums === 1) {
    //     takeAwayGuesses();
    //     tooLowTooHigh('too low');
    // } else if (compareTheNums === -1) {
    //     takeAwayGuesses();
    //     tooLowTooHigh('too high');
    // } else {}
});

resetPlayAgain.addEventListener('click', () => {
    return window.location.reload(true);
});