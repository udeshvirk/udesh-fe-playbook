//write a function which accepts a sorted array of integers. The function should count the unique values in array

const countUniqueValues = (arr) => {
    if (arr.length < 2) {
        return arr.length;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            arr[++i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 3])) //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) //7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2, -1, 0, 1, 1])) //4