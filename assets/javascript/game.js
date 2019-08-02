const computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

let lettersGuessed = [];
let guessesLeft = 10;
let wins = 0;


let computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26)
    );

console.log(computerGuess);

document.onkeydown = function(event) {
    let keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}


function addLetter (usersKeypress) {


    let repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

   
    if (repeatGuess) {
        alert(usersKeypress + " guess again!");

       
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        
        showLettersGuessed();
        
        guessMatch(usersKeypress);
    }

}


function showLettersGuessed() {
    let tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You are a winner!");
        wins = wins + 1;
        showWins();
       

    } else if (guessesLeft === 0) {
        alert("begin again.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}


function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}


function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();

