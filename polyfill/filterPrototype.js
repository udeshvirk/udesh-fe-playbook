/*
 * Polyfill for the `filter` method in JavaScript.
 * The `filterMe` method behaves like the native `filter` method, returning a new array
 * containing all elements of the original array that satisfy the provided callback function.
 * 
 * Example:
 * const arr = [2, 4, 5, 7, 6];
 * const result = arr.filterMe(function (item) {
 *     return item > 4;
 * });
 * console.log(result); // Output: [5, 7, 6]
 */

/**
 * Implements a custom `filterMe` method similar to the native `filter` function.
 * @param {function} fn - The callback function to test each element.
 * @return {Array} - A new array with elements that pass the test implemented by the callback.
 */
Array.prototype.filterMe = function (fn) {
    const myArray = this; // Reference to the original array
    const newArray = []; // Array to store elements that pass the test

    // If the array is empty, return an empty array
    if (!myArray.length) {
        return newArray;
    }

    // Iterate through the array
    for (let i = 0; i < myArray.length; i++) {
        // If the callback function returns true, add the element to the new array
        if (fn(myArray[i], i, myArray)) {
            newArray.push(myArray[i]);
        }
    }

    return newArray; // Return the filtered array
};

// Example usage
const arr = [2, 4, 5, 7, 6];
const result = arr.filterMe(function (item) {
    return item > 4;
});
console.log(result); // Output: [5, 7, 6]