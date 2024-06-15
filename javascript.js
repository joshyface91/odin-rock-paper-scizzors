const choice = [
    "Rock",
    "Paper",
    "Scissors"
];

function getRandomInt () {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(choice, randomInt) {
        return choice[randomInt];
}

function getHumanChoice (humanInput) {
    return humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
}

let humanScore = 5;
let computerScore = 4;

function playRound (choice) {
    let randomInt = getRandomInt();
    let computerChoice = getComputerChoice(choice,randomInt);
    let humanInput = prompt("Rock? Paper? or Scissors? MAKE YOUR CHOICE.", "Rock");
    let humanChoice = getHumanChoice(humanInput);
    if (humanChoice == computerChoice) {
        console.log("It is a draw, sir.");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++
        console.log("Defeat... Rock is smothered by Paper.");
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore++
        console.log("Victory! Rock crushes Scissors.");
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerScore++
        console.log("Defeat... Paper is sliced by Scissors.");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++
        console.log("Victory! Paper smothers Rock.");
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerScore++
        console.log("Defeat... Scissors are crushed by Rock.");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore++
        console.log("Victory! Scissors slice Paper.");
    } else {
        console.log("Input Error. Try again.");
    }
    evaluateScore(humanScore, computerScore);
}

function evaluateScore (humanScore, computerScore) {
    if (humanScore === 5 | computerScore === 5) {
        return console.log("And the final score: You - "+humanScore+"; Them - "+computerScore);
    } else {
        return;
    }
}

function playGame (humanScore, computerScore) {
    if (humanScore === 5 | computerScore === 5) {
    return console.log("And the final score: You - "+humanScore+"; Them - "+computerScore);
} else if (humanScore === 4 | computerScore === 4) {
    console.log("Game Point!");
    playRound(choice);
} else {
    console.log("Your score: " + humanScore);
    console.log("Their score: " + computerScore);
    console.log("Next Round!");
    playRound(choice);
}
}

playGame (humanScore, computerScore);
