
let number = [22, 323, 45, 67, 223, 45, 677, 32, 56, 2435, 577, 2445, 3455, 677];
let max = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
    }
}

console.log("original array", number);
console.log("maximum number", max);