const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const resetScoreBtn = document.getElementById('resetScoreBtn');
let scoreParagraph = document.getElementById('scoreParagraph');
let resultParagraph = document.getElementById('result');
let result;

let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    defeat: 0,
    tie: 0
}

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
        result = 'Tie';
        score.tie++;
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Paper') {
            result = 'Defeat';
            score.defeat++;
        } else if (computerMove === 'Scissors') {
            result = 'Win';
            score.win++;
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
            score.win++;
        } else if (computerMove === 'Scissors') {
            result = 'Defeat';
            score.defeat++;
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Defeat';
            score.defeat++;
        } else if (computerMove === 'Paper') {
            result = 'Win';
            score.win++;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultParagraph.innerHTML = `You: ${playerMove} | CPU: ${computerMove} | ${result} `
    scoreParagraph.innerHTML = `Wins: ${score.win} | Defeats: ${score.defeat} | Ties: ${score.tie}`
}

rockButton.onclick = () => playGame('Rock');
paperButton.onclick = () => playGame('Paper');
scissorsButton.onclick = () => playGame('Scissors');
resetScoreBtn.onclick = () => {
    score.win = 0;
    score.defeat = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    scoreParagraph.innerHTML = `Wins: ${score.win} | Defeats: ${score.defeat} | Ties: ${score.tie}`
    resultParagraph.innerHTML = 'Choose your move!'
}
