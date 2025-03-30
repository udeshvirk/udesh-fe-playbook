/*
 * Function to check if at least one element in an array satisfies a given condition using recursion.
 * 
 * Example:
 * const isOdd = (val) => val % 2 !== 0;
 * console.log(someRecursive([1, 2, 3, 4], isOdd)); // Output: true
 * console.log(someRecursive([2, 4, 6], isOdd));    // Output: false
 */

/**
 * Checks if at least one element in the array satisfies the given callback function.
 * @param {Array} arr - The input array.
 * @param {function} callback - The callback function to test each element.
 * @return {boolean} - Returns true if at least one element satisfies the condition, otherwise false.
 */
function someRecursive(arr, callback) {
    // Base case: If the array is empty, return false
    if (arr.length === 0) {
        return false;
    }

    // Check the first element of the array
    if (callback(arr[0])) {
        return true;
    }

    // Recursive case: Check the rest of the array
    return someRecursive(arr.slice(1), callback);
}

// Example usage
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // Output: true
console.log(someRecursive([2, 4, 6], isOdd));    // Output: false
console.log(someRecursive([], isOdd));           // Output: false
console.log(someRecursive([10, 15, 20], isOdd)); // Output: true