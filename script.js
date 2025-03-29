const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener('click', function() {
    let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        window.alert('You: Rock | CPU: Rock');
        window.alert('It is a draw!')
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        window.alert('You: Rock | CPU: Paper');
        window.alert('You lost!');
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        window.alert('You: Rock | CPU: Scissors');
        window.alert('You win!');
    }
})

paperButton.addEventListener('click', function() {
    let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        window.alert('You: Paper | CPU: Rock');
        window.alert('You win!')
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        window.alert('You: Paper | CPU: Paper');
        window.alert('It is a draw!');
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        window.alert('You: Paper | CPU: Scissors');
        window.alert('You lost!');
    }
})

scissorsButton.addEventListener('click', function() {
    let randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        window.alert('You: Scissors | CPU: Rock');
        window.alert('You lost!')
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        window.alert('You: Scissors | CPU: Paper');
        window.alert('You win!');
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
        window.alert('You: Scissors | CPU: Scissors');
        window.alert('It is a draw!');
    }
})
