// Getting the computer choice of rock, paper or scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return 'rock'
    } else if (computerChoice === 2) {
        return 'paper'
    } else if (computerChoice === 3) {
        return 'scissors'
    } else {
        return 'error'
    }
}
console.log(getComputerChoice());


// Prompting the human to type in a choice of rock, paper or scissors
function getHumanChoice() {
    const humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice;
}
console.log(getHumanChoice());


// Declaring the variables that will be used to keep score
const humanScore = 0;
const computerScore = 0;


// Playing a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if ( 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") 
        ) 
    {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
    //Log the score to the console
     console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

//Display the human choice and the computer choice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Play a round
playRound(humanSelection, computerSelection);