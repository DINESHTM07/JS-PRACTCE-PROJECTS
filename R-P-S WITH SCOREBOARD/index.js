
let choices = ["rock", "paper", "scissors"];

let player = "rock"; 

let playerScore = 0;
let computerScore = 0;

// loop for iteration game rounds
for (let i = 1; i <= 5; i++) {
    let computer = choices[Math.floor(Math.random() * 3)];
    console.log("round:", i);
    if (player === computer) {
        console.log("PLAYER CHOICE:", player)
        console.log("COMPUTERCHOICE:", computer);
        console.log("MATCH TIE")
    }
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log("PLAYER CHOICE:", player)
        console.log("COMPUTERCHOICE:", computer);
        console.log("PLAYER WIN");
        playerScore++;
    } else {
        console.log("PLAYER CHOICE:", player)
        console.log("COMPUTERCHOICE:", computer);
        console.log("COMPUTER WINS");
        computerScore++;
    }

}
console.log(".........................")
console.log("FINAL RESULTS");
if (playerScore > computerScore) {
    console.log("FINAL WINNER IS PLAYER");
    console.log("PLAYERSCORE:", playerScore);
    console.log("COMPUTERSCORE:", computerScore);
} else if (computerScore > playerScore) {
    console.log("COMPUTER WINS");
    console.log("PLAYERSCORE:", playerScore);
    console.log("COMPUTERSCORE:", computerScore);
} else {
    console.log("MATCH TIE");
    console.log("PLAYERSCORE:", playerScore);
    console.log("COMPUTERSCORE:", computerScore);
}

