const pick = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomizePick = Math.floor(Math.random() * pick.length);

    const compChoice = pick[randomizePick];
    console.log("Computer Choice: " + compChoice);

    return compChoice;
}

function getHumanChoice() {
    const choices = prompt(
        "Start the game by picking among 'Rock, Paper, Scissors'"
    );
    let result = choices;

    console.log("Player Choice: " + result);

    return result;
}

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    if (humanChoice === computerChoice) {
        console.log("it's a tie! ");
        tieScore += 1;
        console.log("Tie Score: " + tieScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log("You Win! Rock beats Scissors");
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("You Lose! Paper beats rock");
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You Win! Scissors beats paper ");
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("You Lose! Rock beats Scissors");
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You Win! Paper beats rock ");
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("You Lose! Scissors beats paper");
        console.log("Computer score: " + computerScore);
    } else {
        return "you must input rock, paper or scissors";
    }
    return "Congratulations!";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function playGame(humanSelection, computerSelection) {
    let round = 0;

    while (round != 5) {
        let askUser = prompt("Wanna play another round? ");
        if (askUser === "Yes") {
            getHumanChoice();
            getComputerChoice();
            playRound(humanChoice, computerChoice);
            round += 1;
            break;
        } else if (askUser === "No") {
            console.log("Bye have a good time!");
            break;
        }

        if (round === 5) {
            break;
        }
    }
}
