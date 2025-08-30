console.log("multiplication quiz game");
console.log("TOTALLY FIVE ROUNDS");

let playerChoices = [2,4,6,8,10,12];
let rounds = 6;
let playerScore = 0;

for (i = 1; i <= rounds; i++){
    console.log("ROUND:",i);
    let num1 = Math.floor(Math.random()*6)+1;
    let num2 = Math.floor(Math.random()*6)+1;
    let answer = (num1*num2);
    console.log("TELL ME THE MULTIPLICATION OF ",num1,"*",num2);
    let playerGuess = playerChoices[i];
    if (playerGuess === answer){
        console.log("CORRECT ANSWER");
        playerScore++;
    }else {
        console.log("WRONG ANSWER");
    }
    console.log("..........");
}
console.log("FINAL RESULTS");
console.log("YOUR SCORE:",playerScore,"/",rounds);