    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');

    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');

    var guessCount = 1;

    // function checkGuess() {
    //     var userGuess = Number(guessField.value);
    //     if (guessCount === 1) {
    //         guesses.textContent = 'prvious guesses: ';
    //     }
    //     guesses.textContent += userGuess + ' ';

    //     if (userGuess === rnadomNumber) {
    //         lastResult.textContent = 'Congratulations! You got it right!';
    //         lastResult.style.backgroundColor = 'green';
    //         lowOrHi.textContent = '';
    //         setGameOver();
    //     } else if (guessesCount === 5) {
    //         lastResult.textContent = '!!! GAME OVER!!!';
    //         setGameOver();
    //     } else {
    //         //wrong!
    //     }

    //     guessCount++;
    //     guessField.value = '';
    //     guessField.foucs();
    // }

// guesses.innerText = `Previous guesses: ${guessField.value}`;

function gameStatus(text, color, status) {
    lastResult.innerText = text;
    lastResult.style.backgroundColor = color;
}

function restartBtn() {
    var resetBtn = document.createElement('button');
    resetBtn.innerText = "Start new game";
    resetBtn.setAttribute("class", "resetBtn")
    guesses.parentNode.appendChild(resetBtn);
}

guessSubmit.addEventListener('click', () => {

    if (guessCount > 5) {
        gameStatus("GAME OVER!!!", "red");
        restartBtn();
        guessSubmit.disabled = true;
    }

    if (Number(guessField.value) === randomNumber) {
        gameStatus("Congratulations! You got it right!", "green");
        restartBtn();
        guessSubmit.disabled = true;

    } else if (Number(guessField.value) > randomNumber) {
        guesses.append(`${guessField.value} `);
        gameStatus("Wrong!", "red");
        lowOrHi.innerText = "Last guess was too high!";
        guessCount++;

    } else if (Number(guessField.value) < randomNumber) {
        guesses.append(`${guessField.value} `);
        gameStatus("Wrong!", "red");
        lowOrHi.innerText = "Last guess was too low!";
        guessCount++;
    }
});

function resetGame(){
    guessCount = 1;

    var resetParas = document.querySelector('.resultParas');
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
    
};

guessField.value = randomNumber;