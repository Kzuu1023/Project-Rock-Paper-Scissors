const pick = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
    const randomizePick = Math.floor(Math.random() * pick.length);

    const compChoice = pick[randomizePick];
    console.log("Computer Choice: " + compChoice);

    return compChoice;
}

function getHumanChoice() {
    const choices = prompt(
        "Start the game by picking among 'Rock, Paper, Scissors'"
    ).toLowerCase();
    let result = choices;

    console.log("Player Choice: " + result);

    return result;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("it's a tie! ");
        tieScore++;
        console.log("Tie Score: " + tieScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats rock");
        computerScore++;
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats paper ");
        humanScore++;
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats rock ");
        humanScore++;
        console.log("Human score: " + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats paper");
        computerScore++;
        console.log("Computer score: " + computerScore);
    } else {
        console.log("you must input rock, paper or scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

function playGame() {
    let announce = "  ";
    for (let i = 0; i < 4; i++) {
        let askUser = prompt("Wanna play another round? ");

        if (askUser === "Y") {
            const newHumanChoice = getHumanChoice();
            const newCompChoice = getComputerChoice();
            playRound(newHumanChoice, newCompChoice);
        } else {
            console.log("Thank you, have a good time!");
            break;
        }
    }

    console.log(
        "Final Score: " +
            "Human: " +
            humanScore +
            " " +
            "Computer: " +
            computerScore +
            " " +
            "Tie Score: " +
            tieScore
    );

    if (humanScore === computerScore) {
        return (announce = "It's a tie!");
    } else if (humanScore > computerScore) {
        return (announce = "Congratulations! You Won");
    } else {
        return (announce = "It's okay, better luck next time!");
    }
}

console.log(playGame());
