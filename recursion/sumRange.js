//Write a function called sumRange.
// It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Example, sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(number) {
    if (number === 1) {
        return number;
    } else {
        return number + sumRange(number - 1)
    }
}
console.log(sumRange(3))