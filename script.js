const rockButton = document.getElementById('js-rock-button');
const paperButton = document.getElementById('js-paper-button');
const scissorsButton = document.getElementById('js-scissors-button');
const resetScoreBtn = document.getElementById('js-reset-score');
const scoreParagraph = document.getElementById('js-score');
const resultParagraph = document.getElementById('js-result');
let result;

let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    defeat: 0,
    tie: 0
};

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'Rock';
    } else if (randomNumber < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === computerMove) {
        result = 'Tie';
        score.tie++;
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'Win';
        score.win++;
    } else {
        result = 'Defeat';
        score.defeat++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultParagraph.innerHTML = `You: ${playerMove} | CPU: ${computerMove} | ${result}`;
    scoreParagraph.innerHTML = `Wins: ${score.win} | Defeats: ${score.defeat} | Ties: ${score.tie}`;
}

rockButton.onclick = () => playGame('Rock');
paperButton.onclick = () => playGame('Paper');
scissorsButton.onclick = () => playGame('Scissors');

resetScoreBtn.onclick = () => {
    score = { win: 0, defeat: 0, tie: 0 };
    localStorage.removeItem('score');
    scoreParagraph.innerHTML = `Wins: 0 | Defeats: 0 | Ties: 0`;
    resultParagraph.innerHTML = 'Choose your move!';
};
