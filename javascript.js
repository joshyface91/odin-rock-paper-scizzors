// Step 1: setup docs

// Step 2: build code for computer logic
// SET array choice equal to three options
// SET variable randomInt equal to getRandomInt function
// CALL function getRandomInt
// CALL function getComputerChoice
//  PASS parameters (choice, randomInt)
//  RETURN choice[randomInt]

const choice = [
    "Rock",
    "Paper",
    "Scizzors"
];

let randomInt = getRandomInt();

function getRandomInt () {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(choice, randomInt) {
        return choice[randomInt];
}

// Test

// console.log(randomInt)

// console.log(getComputerChoice(choice, randomInt))

// Step 3: 
