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

let humanScore = 0;
let computerScore = 0;

function playRound (choice, humanChoice) {
    let randomInt = getRandomInt();
    let computerChoice = getComputerChoice(choice,randomInt);
    let announce = document.querySelector("#tally-announcement");
    let tallyUser = document.querySelector("#tally-user");
    let tallyComputer = document.querySelector("#tally-computer");
    if (humanChoice == computerChoice) {
        announce.textContent = "It is a draw, sir.";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++
        tallyComputer.textContent = "Computer's Score: " + computerScore;
        announce.textContent = "Defeat... Rock is smothered by Paper.";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore++
        tallyUser.textContent = "Your Score: " + humanScore;
        announce.textContent = "Victory! Rock crushes Scissors.";
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerScore++
        tallyComputer.textContent = "Computer's Score: " + computerScore;
        announce.textContent = "Defeat... Paper is sliced by Scissors.";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++
        tallyUser.textContent = "Your Score: " + humanScore;
        announce.textContent = "Victory! Paper smothers Rock.";
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerScore++
        tallyComputer.textContent = "Computer's Score: " + computerScore;
        announce.textContent = "Defeat... Scissors are crushed by Rock.";
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore++
        tallyUser.textContent = "Your Score: " + humanScore;
        announce.textContent = "Victory! Scissors slice Paper.";
    } else {
        announce.textContent = "Input Error. Try again.";
    }

    window.onbeforeunload = () => {
        sessionStorage.setItem("finalMessage", "The Final Results:");
        sessionStorage.setItem("humanScore", humanScore);
        sessionStorage.setItem("tallyAnnouncement", "");
        sessionStorage.setItem("computerScore", computerScore);
    }
    evaluateScore(humanScore, computerScore);
}

function evaluateScore (humanScore, computerScore) {
    if ((humanScore === 5 | computerScore === 5) && humanScore > computerScore) {
        window.location = "win.html";
    } else if ((humanScore === 5 | computerScore === 5) && humanScore < computerScore) {
        window.location = "lose.html";
    } else {
        return;
    }
}

window.onload = function() {
    let rockSelection = document.querySelector("#rock") !== null;
    if (rockSelection) {
        const rockChoice = document.querySelector("#rock");
        rockChoice.onclick = () => {
            let humanChoice = "Rock";
            playRound(choice, humanChoice);
            roundCount.textContent = "Round " + round++;
        };
    }
    let paperSelection = document.querySelector("#paper") !== null;
    if (paperSelection) {
        const paperChoice = document.querySelector("#paper");
        paperChoice.onclick = () => {
            let humanChoice = "Paper";
            playRound(choice, humanChoice);
            roundCount.textContent = "Round " + round++;
        };
    }
    let scissorsSelection = document.querySelector("#scissors") !== null;
    if (scissorsSelection) {
        const scissorsChoice = document.querySelector("#scissors");
        scissorsChoice.onclick = () => {
            let humanChoice = "Scissors";
            playRound(choice, humanChoice);
            roundCount.textContent = "Round " + round++;
        };
    }
    let randomSelection = document.querySelector("#random") !== null;
    if (randomSelection) {
        const randomChoice = document.querySelector("#random");
        randomChoice.onclick = () => {
            let randomInt = getRandomInt();
            let humanChoice = getComputerChoice(choice, randomInt);
            playRound(choice, humanChoice);
            roundCount.textContent = "Round " + round++;
        };
    }

    let round = 1;
    const roundCount = document.querySelector("#round-count");
    const returnHome = document.querySelector(".logo");
    returnHome.addEventListener("click", () => {
        window.location = "https://joshyface91.github.io/odin-rock-paper-scizzors/";
    });
}
