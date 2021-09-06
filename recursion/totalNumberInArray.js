//Given a multi-dimensional integer array,
// return the total number of integers stored inside this array
// Example, totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(arr) {
    if (arr.length === 0) return 0;
    let count = 0;
    let first = arr.shift();

    if (typeof first === "number") {
        count++;
    } else if (Array.isArray(first)) {
        count += totalIntegers(first);
    }

    return count + totalIntegers(arr);
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))