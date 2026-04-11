// Display who won the round or if it's a tie
let displayRoundWinner = document.getElementById('round-winner')

// Display the score in the DOM
let displayCompScore = document.getElementById('comp-score');
let displayHumanScore = document.getElementById('human-score')

// Display the overall winner in the DOM
let displayOverallWinner = document.getElementById('overall-winner');

let modal = document.getElementById('game-over-modal');
let modalImage = document.getElementById('modal-image');

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

// Check if the game is over and a winner has been declared
function checkGameOver() {

    if (humanScore >= 5 || computerScore >= 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        

        if (humanScore >= 5) {
                displayRoundWinner.innerText = "";
                modalImage.src = "images/skeleton-lost.jpeg";
                displayOverallWinner.innerText = "HUMAN WINS"
            } else if (computerScore >= 5) {
                displayRoundWinner.innerText = "";
                modalImage.src = "images/skeleton-won.jpeg";
                displayOverallWinner.innerText = "SKELETON WINS"
            }
        
        modal.classList.remove('hidden');
    } 
}




// Play a round of rock paper scissors
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
            displayRoundWinner.innerText = `Human picked ${humanChoice}. Skeleton picked ${computerChoice}.\n Human wins!`;
        } else {
            computerScore++;
            displayRoundWinner.innerText = `Skeleton picked ${computerChoice}. Human picked ${humanChoice}.\n Skeleton wins!`
        }
        //Log the score to the console
        displayHumanScore.innerText = `Human\n ${humanScore}`;
        displayCompScore.innerText = `Skeleton\n ${computerScore}`;

        // Check if the game is over
        checkGameOver();
}

// Assign buttons
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors')

// Pass the human choice into playRound
rockButton.addEventListener('click', () => handleChoice('rock'));
paperButton.addEventListener('click', () => handleChoice('paper'));
scissorsButton.addEventListener('click', () => handleChoice('scissors'));

function handleChoice(choice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    playRound(choice, getComputerChoice());
}


// // Human picks rock
// rockButton.addEventListener('click', playRock);
// function playRock() {
//     if (humanScore >= 5 || computerScore >= 5) return;
//     playRound('rock', getComputerChoice());
// };

// // Human picks paper
// paperButton.addEventListener('click', playPaper);
// function playPaper() {
//     if (humanScore >= 5 || computerScore >= 5) return;
//     playRound('paper', getComputerChoice());
// }

// // Human picks scissors
// scissorsButton.addEventListener('click', playScissors);
// function playScissors() {
//     if (humanScore >= 5 || computerScore >= 5) return;
//     playRound('scissors', getComputerChoice());
// }


// Reset the scores and restart the game
let resetScores = document.getElementById('restart')

resetScores.addEventListener('click', clearScore);
function clearScore() {
    modal.classList.add('hidden');

    humanScore = 0;
    computerScore = 0;

    displayRoundWinner.innerText = "";
    displayHumanScore.innerText = "";
    displayCompScore.innerText = "";
    displayOverallWinner.innerText = "";

    
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}