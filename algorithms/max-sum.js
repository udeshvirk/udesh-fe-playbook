//find the max sum of k executive number in an array
const maxSubarraySum = (arr, k) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < k) return null;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        tempSum = tempSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubarraySum([], 4)) //null
