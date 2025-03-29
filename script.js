const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
let resultParagraph = document.getElementById('result');
let computerMove;
let result;

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
}

rockButton.addEventListener('click', function() {
    pickComputerMove();
    if (computerMove === 'rock') {
        result = 'Draw!';
    } else if (computerMove === 'paper') {
        result = 'Lose!';
    } else if (computerMove === 'scissors') {
        result = 'Win!';
    }
    resultParagraph.innerHTML = `You chose rock. Computer chose ${computerMove}. ${result}`;
})

paperButton.addEventListener('click', function() {
    pickComputerMove();
    if (computerMove === 'rock') {
        result = 'Win!';
    } else if (computerMove === 'paper') {
        result = 'Draw!';
    } else if (computerMove === 'scissors') {
        result = 'Lose!';
    }
    resultParagraph.innerHTML = `You chose paper. Computer chose ${computerMove}. ${result}`;
})

scissorsButton.addEventListener('click', function() {
    pickComputerMove();
    if (computerMove === 'rock') {
        result = 'Lose!';
    } else if (computerMove === 'paper') {
        result = 'Win!';
    } else if (computerMove === 'scissors') {
        result = 'Draw!';
    }
    resultParagraph.innerHTML = `You chose scissors. Computer chose ${computerMove}. ${result}`;
})
