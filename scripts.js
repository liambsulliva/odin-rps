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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Both players picked ${playerSelection}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Invalid input.`;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let input = prompt(`Enter Rock, Paper, or Scissors: `);
        input = input.toUpperCase();
        console.log(playRound(input, getComputerChoice()));
    }
}