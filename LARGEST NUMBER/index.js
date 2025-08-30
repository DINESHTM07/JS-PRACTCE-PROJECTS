let number1 = 23;
let number2 = 55;
let number3 = 21;

if (number1 >= number2 && number1 >= number3) {
    console.log("largest number is ", number1);
} else if (number2 >= number1 && number2 >= number3) {
    console.log("largest number is ", number2);
} else {
    console.log("largest number is ", number3);
}

if (number1 <= number2 && number1 <= number3) {
    console.log("smallest is", number1);
} else if (number2 <= number1 && number2 <= number3) {
    console.log("smallest ", number2);
} else {
    console.log("smallest ", number3);
}