/*
 * Implement Map polyfill using the `reduce` method.
 * The `mapMe` method behaves like the native `map` method, returning a new array
 * with the results of calling a provided function on every element in the original array.
 * 
 * Example:
 * const arr = [1, 2, 3, 4];
 * console.log(arr.mapMe((item) => item + 1)); // Output: [2, 3, 4, 5]
 */

/**
 * Implements a custom `mapMe` method using the `reduce` function.
 * @param {function} fn - The callback function to execute on each element.
 * @return {Array} - A new array with the results of calling the callback on each element.
 */
Array.prototype.mapMe = function (fn) {
    return this.reduce((acc, currentValue, index, array) => {
        // Call the callback function with the current element, index, and array
        acc.push(fn(currentValue, index, array)); // Add the transformed element to the accumulator
        return acc; // Return the accumulator for the next iteration
    }, []); // Initialize the accumulator as an empty array
};

// Example usage
const arr = [1, 2, 3, 4];

// Example 1: Increment each element by 1
console.log(arr.mapMe((item) => item + 1)); // Output: [2, 3, 4, 5]

// Example 2: Multiply each element by 2
console.log(arr.mapMe((item) => item * 2)); // Output: [2, 4, 6, 8]

// Example 3: Return the index of each element
console.log(arr.mapMe((item, index) => index)); // Output: [0, 1, 2, 3]