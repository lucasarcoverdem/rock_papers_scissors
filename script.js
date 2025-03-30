const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
let resultParagraph = document.getElementById('result');
let result;

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'Paper';
    } else if (randomNumber >= 2 / 3) {
        return 'Scissors';
    }
}

function playGame(playerMove) {
    const computerMove = pickComputerMove()

    if (playerMove === computerMove) {
        result = 'Draw';
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Paper') {
            result = 'Defeat';
        } else if (computerMove === 'Scissors') {
            result = 'Win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
        } else if (computerMove === 'Scissors') {
            result = 'Defeat';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Defeat';
        } else if (computerMove === 'Paper') {
            result = 'Win';
        }
    }

    resultParagraph.innerHTML = `You: ${playerMove} | CPU: ${computerMove} | ${result} `
}

rockButton.onclick = () => playGame('Rock');
paperButton.onclick = () => playGame('Paper');
scissorsButton.onclick = () => playGame('Scissors');
