// Write a function that sums squares of numbers in list that may contain more lists
// Example, console.log(sumSquares([10,[[10],10],[10]] )); // 100 + 100 + 100 + 100 = 400

function sumSquares(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let total = 0;
    let first = arr.shift();

    if (Array.isArray(first)) {
        total += sumSquares(first);
    } else if (Number.isInteger(first)) {
        total += Math.pow(first, 2)
    }
    return total + sumSquares(arr);
}

console.log(sumSquares([10, [[10], 10], [10]]))