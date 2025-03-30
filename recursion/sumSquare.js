/*
 * Function to calculate the sum of squares of numbers in a list that may contain nested lists.
 * 
 * Example:
 * console.log(sumSquares([10, [[10], 10], [10]])); // Output: 400 (100 + 100 + 100 + 100)
 * console.log(sumSquares([2, 3, [4], [[5]]]));     // Output: 54 (4 + 9 + 16 + 25)
 */

/**
 * Calculates the sum of squares of numbers in a list, including nested lists.
 * @param {Array} arr - The input array, which may contain nested arrays.
 * @return {number} - The sum of squares of all numbers in the array.
 */
function sumSquares(arr) {
    // Base case: If the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    let total = 0; // Initialize the total sum
    let first = arr.shift(); // Remove the first element from the array

    if (Array.isArray(first)) {
        // If the first element is an array, recursively calculate its sum of squares
        total += sumSquares(first);
    } else if (Number.isInteger(first)) {
        // If the first element is a number, add its square to the total
        total += Math.pow(first, 2);
    }

    // Add the sum of squares of the remaining elements in the array
    return total + sumSquares(arr);
}

// Example usage
console.log(sumSquares([10, [[10], 10], [10]])); // Output: 400
console.log(sumSquares([2, 3, [4], [[5]]]));     // Output: 54
console.log(sumSquares([]));                     // Output: 0
console.log(sumSquares([1, [2, [3, [4]]]]));     // Output: 30