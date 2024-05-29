// console.log("Hello World")

// Step 1: setup docs

// Step 2: build code for computer logic
// SET variable (choice) equal to Math.random
// CALL function getComputerChoice
// PASS variable (choice)
//  IF 0 =< choice < .33 THEN
//      RETURN "Rock"
//      ELSEIF .33 =< choice < .66 THEN
//          RETURN "Paper"
//      ELSEIF .66 =< choice < 1 THEN
//          RETURN "Scizzors"
//  ENDIF

let choice = Math.random()

function getComputerChoice(choice) {
    if (0 <= choice < .33) {
        return "Rock";
    } else if (.33 <= choice < .66) {
        return "Paper";
    } else {
        return "Scizzors";
    }
}

console.log(choice)
console.log(getComputerChoice(choice))

// STEP 3: 