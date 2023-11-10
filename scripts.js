// Globals
let playerScore = 0;
let computerScore = 0;

// Set button images
const rockBtn = document.getElementById('ROCK');
const paperBtn = document.getElementById('PAPER');
const scissorsBtn = document.getElementById('SCISSORS');

const rockImg = document.createElement('img');
rockImg.src = 'src/rock.png';
rockImg.width = 50;
rockImg.height = 50;
const paperImg = document.createElement('img');
paperImg.src = 'src/paper.svg';
paperImg.width = 50;
paperImg.height = 50;
const scissorsImg = document.createElement('img');
scissorsImg.src = 'src/scissors.svg';
scissorsImg.width = 50;
scissorsImg.height = 50;

rockBtn.appendChild(rockImg);
paperBtn.appendChild(paperImg);
scissorsBtn.appendChild(scissorsImg);

// Set up scoring in the DOM
const scores = document.querySelector('div');
const playerScoreCounter = document.createElement('p');
const computerScoreCounter = document.createElement('p');
const gameStatus = document.createElement('p');

playerScoreCounter.textContent = 'Player Score: ' + playerScore;
computerScoreCounter.textContent = 'CPU Score: ' + computerScore;

scores.appendChild(playerScoreCounter);
scores.appendChild(computerScoreCounter);

// Listen for button clicks
const buttons = document.querySelectorAll('button');

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
        return `Round Tied! Both players picked ${playerSelection}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        playerScoreCounter.textContent = 'Player Score: ' + playerScore;
        return `Round Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computerScoreCounter.textContent = 'CPU Score: ' + computerScore;
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