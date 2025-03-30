/*
 * Function to calculate the total number of integers stored inside a multi-dimensional array.
 * 
 * Example:
 * console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // Output: 7
 */

/**
 * Calculates the total number of integers in a multi-dimensional array.
 * @param {Array} arr - The input array, which may contain nested arrays.
 * @return {number} - The total number of integers in the array.
 */
function totalIntegers(arr) {
    // Base case: If the array is empty, return 0
    if (arr.length === 0) return 0;

    let count = 0; // Initialize the count of integers
    let first = arr.shift(); // Remove the first element from the array

    if (typeof first === "number") {
        // If the first element is a number, increment the count
        count++;
    } else if (Array.isArray(first)) {
        // If the first element is an array, recursively calculate its total integers
        count += totalIntegers(first);
    }

    // Add the count of integers in the rest of the array
    return count + totalIntegers(arr);
}

// Example usage
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // Output: 7
console.log(totalIntegers([1, [2, [3, [4, [5]]]]]));                  // Output: 5
console.log(totalIntegers([]));                                       // Output: 0
console.log(totalIntegers([['foo'], [true, false], [null, undefined]])); // Output: 0