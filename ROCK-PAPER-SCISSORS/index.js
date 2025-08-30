
let choices = ["rock", "paper", "scissors"];
let playerChoice = "rock";

let computerChoice = choices[Math.floor(Math.random() * 3)];

if (playerChoice === computerChoice) {
    console.log("awww match tie");
}
else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    console.log("🎉 You win! " + playerChoice + " beats " + computerChoice);
} else {
    console.log("❌ You lose! " + computerChoice + " beats " + playerChoice);
}
