let secretNumber = Math.floor(Math.random() * 20) + 1;

let rounds = 5;

let Choices = [12, 20, 14, 17, 5];

console.log("welcome to the number guessing game");
console.log("totally five rounds");
console.log("guess the number between 1 to 20");

for (let i = 0; i < rounds; i++) {
    let playerChoice = Choices[i];
    console.log("round :", i + 1);
    console.log("SECRET NUMBER :", secretNumber);
    console.log("PLAYER GUESS :", playerChoice);
    console.log(".............................");
    if (secretNumber === playerChoice) {
        console.log("YOU GUESSED CORRECTLY");
        break;
    } else if (secretNumber < playerChoice) {
        console.log("NUMBER IS TOO HIGH");
    } else {
        console.log("NUMBER IS TOO LOW");
    }
}