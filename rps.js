humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];  
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];      
}

function getHumanChoice()
{
    let input = prompt("Do you choose rock, paper or scissors?");
    input = input.toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}   

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } 
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } 
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${round}:`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();

// console.log(getComputerChoice());
//console.log(getHumanChoice());