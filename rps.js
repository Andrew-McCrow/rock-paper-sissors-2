let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

function updateScoreboard() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

// result is the div where we will display results
const result = document.getElementById("result");

// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];  
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];      
}  

// Function to play a round given a "humanChoice" and "computerChoice"
function playRound(humanChoice, computerChoice) {
    const para = document.createElement("p"); // Create a new paragraph element to display the result

    if (humanChoice === computerChoice) {
        para.textContent = "The game is a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        para.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } 
    else {
        computerScore++;
        para.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScoreboard();
    result.appendChild(para); // Append the result to the result div
}


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
