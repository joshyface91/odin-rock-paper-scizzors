let results = document.querySelector("#round-count");
let tallyUser = document.querySelector("#tally-user");
let announcement = document.querySelector("#tally-announcement");
let tallyComputer = document.querySelector("#tally-computer");

window.onload = function () {
    const returnHome = document.querySelector(".logo");
    returnHome.addEventListener("click", () => {
        window.location = "https://joshyface91.github.io/odin-rock-paper-scizzors/";
    });
    
    let finalMessage = sessionStorage.getItem("finalMessage");
    let humanScore = sessionStorage.getItem("humanScore");
    let tallyAnnouncement = sessionStorage.getItem("tallyAnnouncement");
    let computerScore = sessionStorage.getItem("computerScore");
    document.querySelector("#round-count").style.fontSize="36px";
    results.textContent = finalMessage;
    tallyUser.textContent = "Your Score: " + humanScore;
    document.querySelector("#tally-announcement").style.display="none";
    tallyComputer.textContent = "Computer's Score: " + computerScore;
}
