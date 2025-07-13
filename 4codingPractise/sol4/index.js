
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let PlayGame = true;

if (PlayGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value)
    validateGuess(guess)
    console.log(guess)
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number: ")
  } else if (guess < 1) {
    alert("Please enter a number more than 1")
  } else if (guess > 100) {
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over Random number was ${randomNumber}`);
      endGame();
    } else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess) {

}
function displayMessage(message) {

}
function displayGuess(guess) {

}

function newGame() {

}
function endGame() {

}