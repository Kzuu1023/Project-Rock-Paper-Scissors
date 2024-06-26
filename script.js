const humanScore = 0;
const computerScore = 0;

function getComputerChoice(pickLength) {
    const pick = ["rock", "paper", "scissors"];
    let result = " ";
    for (let i = 0; i < pickLength; i++) {
        result += pick.charAt(Math.floor(Math.random() * pick.length));
    }

    return result;
}

function getHumanChoice() {
    let choices = parseInt(
        prompt("Please enter your choices:  ").toLowerCase()
    );
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    switch (true) {
        case humanSelection === computerScore:
            console.log("it's a tie! ");
            break;
    }
}

playRound(humanSelection, computerSelection);
