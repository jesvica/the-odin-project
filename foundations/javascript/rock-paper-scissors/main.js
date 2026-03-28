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
// console.log(getComputerChoice());

// I don't need this anymore as the human will click the button to choose their option
// Prompting the human to type in a choice of rock, paper or scissors
// function getHumanChoice() {
//     const humanChoice = prompt("Rock, paper or scissors?");
//     return humanChoice;
// }
// console.log(getHumanChoice());


// Declaring the variables that will be used to keep score
let humanScore = 0;
let computerScore = 0;

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


function playGame() {

    //Display the human choice and the computer choice
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //Play a round
    playRound(humanSelection, computerSelection);
}


// for (let i = 0; i < 5; i++) {
//     playGame();
// };

// playGame();
// playGame();
// playGame();
// playGame();
// playGame();

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

