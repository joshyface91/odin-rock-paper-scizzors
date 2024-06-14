const choice = [
    "Rock",
    "Paper",
    "Scizzors"
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

let humanScore = 4;
let computerScore = 4;

function playRound (choice) {
    let randomInt = getRandomInt();
    let computerChoice = getComputerChoice(choice,randomInt);
    let humanInput = prompt("Rock? Paper? or Scizzors? MAKE YOUR CHOICE.", "Rock");
    let humanChoice = getHumanChoice(humanInput);
    if (humanChoice == computerChoice) {
        console.log("It is a draw, sir.");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++
        console.log("Defeat... Rock is smothered by Paper.");
    } else if (humanChoice == "Rock" && computerChoice == "Scizzors") {
        humanScore++
        console.log("Victory! Rock crushes Scizzors.");
    } else if (humanChoice == "Paper" && computerChoice == "Scizzors") {
        computerScore++
        console.log("Defeat... Paper is sliced by Scizzors.");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++
        console.log("Victory! Paper smothers Rock.");
    } else if (humanChoice == "Scizzors" && computerChoice == "Rock") {
        computerScore++
        console.log("Defeat... Scizzors are crushed by Rock.");
    } else if (humanChoice == "Scizzors" && computerChoice == "Paper") {
        humanScore++
        console.log("Victory! Scizzors slice Paper.");
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
