
let numbers = [5, 10, 15, 20, 25, 30, 35];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; //also use += instead of sum = sum +
}

let average = sum / numbers.length;

console.log(numbers, "Numbers");
console.log(sum, "their sum");
console.log(average, "their average");