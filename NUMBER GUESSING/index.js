
let secretnumber = Math.floor(Math.random() * 10) + 1;

let guess = 9;

while (secretnumber !== guess) {
    console.log("try again the number is",secretnumber,"your number is",guess);
    guess = Math.floor(Math.random() * 10) + 1;
} 

console.log("you win the number is",secretnumber,"your number is",guess);