const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
} return 'Sorry you must choose either Rock, Paper or Scissors';
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie Game';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The Computer has won!';
        } return 'Congratulations, You Win!';
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won!';
        } return 'Congratulations, You Win!';
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won!';
        } return 'Congratulations, You Win!';
    }
    if (userChoice === 'bomb') {
        return 'congratulations, You Win'
    }
}

function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice()

    console.log(`Computer threw ${computerChoice}`)
    console.log(`You threw ${userChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()