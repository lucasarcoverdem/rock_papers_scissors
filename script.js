const rockButton = document.getElementById('js-rock-button');
const paperButton = document.getElementById('js-paper-button');
const scissorsButton = document.getElementById('js-scissors-button');
const resetScoreBtn = document.getElementById('js-reset-score');
const chosenMoves = document.getElementById('js-chosen-moves');
const resultParagraph = document.getElementById('js-result');
const scoreParagraph = document.getElementById('js-score');
const autoplayButton = document.getElementById('js-autoplay');

let result;
let isAutoplaying = false;
let score = {
    win: 0,
    defeat: 0,
    tie: 0,
}

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

function autoplay() {
    if (isAutoplaying) {
        playerMove = pickComputerMove();
        playGame(playerMove);
        setTimeout(autoplay, 1500);
    }
}

function getEmoji(playerMove) {
    if (playerMove === 'Rock') return '✊';
    if (playerMove === 'Paper') return '✋';
    if (playerMove === 'Scissors') return '✌️';
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

    const playerMoveEmoji = getEmoji(playerMove);
    const computerMoveEmoji = getEmoji(computerMove);
    chosenMoves.innerText = `You: ${playerMoveEmoji} CPU: ${computerMoveEmoji}`;
    resultParagraph.innerText = `It is a ${result}!`;
    scoreParagraph.innerText = `${score.win} wins ${score.defeat} defeats ${score.tie} ties`;
}

rockButton.onclick = () => playGame('Rock');
paperButton.onclick = () => playGame('Paper');
scissorsButton.onclick = () => playGame('Scissors');
resetScoreBtn.onclick = () => {
    score = { win: 0, defeat: 0, tie: 0 };
    chosenMoves.innerText = '';
    resultParagraph.innerText = '';
    scoreParagraph.innerText = '0 wins 0 defeats 0 ties';
};
autoplayButton.onclick = () => {
    if (isAutoplaying === false) {
        isAutoplaying = true;
    } else {
        isAutoplaying = false;
    }

    autoplay();
    
};

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
})
