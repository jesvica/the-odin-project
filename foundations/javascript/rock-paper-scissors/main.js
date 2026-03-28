// Display who won the round or if it's a tie
let displayRoundWinner = document.getElementById('round-winner')

// Display the score in the DOM
let displayScore = document.getElementById('score');

// Display the overall winner in the DOM
let displayOverallWinner = document.getElementById('overall-winner');


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


// Declaring the variables that will be used to keep score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            displayRoundWinner.innerText = "It's a tie!"
        } else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper") 
            ) 
        {
            humanScore++;
            displayRoundWinner.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            displayRoundWinner.innerText = `You lose! ${computerChoice} beats ${humanChoice}`
        }
        //Log the score to the console
        displayScore.innerText = `Score: Human ${humanScore} - Computer ${computerScore}`;

        if (humanScore === 5) {
            displayOverallWinner.innerText = "Human wins!"
        } else if (computerScore === 5) {
            displayOverallWinner.innerText = "Computer wins!"
        }
}

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', playRock);
function playRock() {
    playRound('rock', getComputerChoice());
};

paperButton.addEventListener('click', playPaper);
function playPaper() {
    playRound('paper', getComputerChoice());
}

scissorsButton.addEventListener('click', playScissors);
function playScissors() {
    playRound('scissors', getComputerChoice());
}

// Reset the scores and restart the game
let resetScores = document.getElementById('restart')

resetScores.addEventListener('click', clearScore);
function clearScore() {
    humanScore = 0;
    computerScore = 0;
}