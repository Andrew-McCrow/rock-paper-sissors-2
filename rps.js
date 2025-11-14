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

// Example usage:

console.log(getComputerChoice());
console.log(getHumanChoice());