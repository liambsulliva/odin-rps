// Globals
let playerScore = 0;
let computerScore = 0;

// Set button images
const rockBtn = document.getElementById('ROCK');
const paperBtn = document.getElementById('PAPER');
const scissorsBtn = document.getElementById('SCISSORS');

// Set up scoring in the DOM
const scores = document.querySelector('.scoring');
const playerScoreCounter = document.createElement('p');
const computerScoreCounter = document.createElement('p');
const gameStatus = document.createElement('p');

playerScoreCounter.textContent = 'Player Score: ' + playerScore;
computerScoreCounter.textContent = 'CPU Score: ' + computerScore;

scores.appendChild(playerScoreCounter);
scores.appendChild(computerScoreCounter);

// Listen for button clicks
const buttons = document.querySelectorAll('ul li');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameStatus.textContent = playRound(button.id, getComputerChoice());
        scores.appendChild(gameStatus);
        checkWinState();
    });
});

// Generates the string 'rock', 'paper', or 'scissors' each time run
function getComputerChoice () {
    const rand = Math.floor((Math.random() * 3) + 1); // Returns int between 1-3
    switch (rand) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}
// Returns string given player and computer selection to feed to game()
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameStatus.classList.remove('shake-text');
        gameStatus.classList.remove('bounce-text');
        return `Round Tied! Both players picked ${playerSelection}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        playerScoreCounter.textContent = 'Player Score: ' + playerScore;
        gameStatus.classList.remove('shake-text');
        gameStatus.classList.add('bounce-text');
        return `Round Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computerScoreCounter.textContent = 'CPU Score: ' + computerScore;
        gameStatus.classList.remove('bounce-text');
        gameStatus.classList.add('shake-text');
        return `Round Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

// Checks whether either score hits 5.
// If it does, announce the winner and reset the game elements.
function checkWinState () {
    if (playerScore === 5) {
        alert('YOU WON THE GAME!! You reached 5 points.');
        playerScore = 0;
        computerScore = 0;
        playerScoreCounter.textContent = 'Player Score: ' + playerScore;
        computerScoreCounter.textContent = 'CPU Score: ' + computerScore;
        scores.removeChild(gameStatus);
    }
    if (computerScore === 5) {
        alert('You lost the game... the CPU reached 5 points before you.');
        playerScore = 0;
        computerScore = 0;
        playerScoreCounter.textContent = 'Player Score: ' + playerScore;
        computerScoreCounter.textContent = 'CPU Score: ' + computerScore;
        scores.removeChild(gameStatus);
    }
}