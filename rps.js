// keeps track of scores and displays them on UI
let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

function updateScoreboard() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

// result is the div where we will display the game results
const result = document.getElementById("result");

// buttons is a node list. It looks and acts much like an array of the buttons.
const buttons = document.querySelectorAll("button");

// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];  
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];      
}  

// Function to play a round given a "humanChoice" and "computerChoice"
function playRound(humanChoice, computerChoice) {
    const para = document.createElement("p"); // Create a new paragraph element to display the result
    if (humanScore >= 5){ 

        para.textContent = "You WIN! You have already won 5 times. Refresh the page to play again.";
        result.appendChild(para);
        buttons.forEach((button) => {
            button.disabled = true; // Disable all buttons
        })
    }

    else if (computerScore >= 5){

        para.textContent = "You LOSE! The computer has already won 5 times. Refresh the page to play again.";
        result.appendChild(para);
        buttons.forEach((button) => {
            button.disabled = true; // Disable all buttons
        })
    }

    else {
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
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
