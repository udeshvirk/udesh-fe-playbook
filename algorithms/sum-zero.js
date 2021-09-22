/*
write a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
Return an array which includes both the values or null in case pair doesn't exist
console.log(sumZero([-4, -3, -2, -1, 1, 3, 5, 10])); //[ -3, 3]
console.log(sumZero([-4, -2, -1, 1, 3, 5, 10])); //[ -1, 1]
console.log(sumZero([-4, -2, -1, 3, 5, 10])); // null
 */
const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (right > left) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++
        }
    }
    return null;
};
console.log(sumZero([-4, -3, -2, -1, 1, 3, 5, 10]));
console.log(sumZero([-4, -2, -1, 1, 3, 5, 10]));
console.log(sumZero([-4, -2, -1, 3, 5, 10]));