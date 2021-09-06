//Write a function called power which takes in a base and an exponent.
// If the exponent is 0, return 1.
// Example, console.log(power(2, 4)); // 16

function power(number, pow) {
    if (pow === 0) {
        return 1;
    } else {
        return number * power(number, pow - 1);
    }
}

console.log(power(2, 4));