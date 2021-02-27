    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    var guessCount = 1;

function gameStatus(text, color, status) {
    lastResult.innerText = text;
    lastResult.style.backgroundColor = color;

    if(status === "high"){
        lowOrHi.textContent = "Last guess was too high!";
    } else if(status === "low"){
        lowOrHi.textContent = "Last guess was too low!";
    }
}

function checkGuess(){
    var userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textCotent = `Previous guesses: ${guessField.value}`;
    }

    guesses.textContent += userGuess + ' ';

    if (guessCount === 5) {
        gameStatus("GAME OVER!!!", "red");
        setGameOver();
    }

    if (userGuess === randomNumber) {
        gameStatus("Congratulations! You got it right!", "green");
        setGameOver();

    } else if (userGuess > randomNumber) {
        gameStatus("Wrong!", "red", "high");

    } else if (userGuess < randomNumber) {
        gameStatus("Wrong!", "red", "low");
    }
    guessCount++;
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    var resetBtn = document.createElement('button');
    resetBtn.innerText = "Start new game";
    resetBtn.setAttribute("class", "resetBtn")
    // guesses.parentNode.appendChild(resetBtn);
    document.body.appendChild(resetBtn);

    guessSubmit.disabled = true;
    guessField.disabled = true;

    //이게 왜 실행 되는 걸까...?
    resetBtn.addEventListener('click', resetGame);

}

function resetGame(){
    var resultParas = document.querySelectorAll(".resultParas p");
    var resetParas = document.querySelector('.resultParas');

    for(var i = 0; i < resultParas.length; i++){
        resultParas[i].textContent = '';
    }

    guessCount = 1;

    for (var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    var resetBtn = document.querySelector('.resetBtn');
    resetBtn.parentNode.removeChild(resetBtn);

    guessSubmit.disabled = false;
    guessField.disabled = false;
    guessField.value = "";

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessField.focus();
};