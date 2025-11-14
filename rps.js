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

console.log(getComputerChoice());