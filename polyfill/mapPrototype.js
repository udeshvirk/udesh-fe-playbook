/*
 * Polyfill for the `map` method in JavaScript.
 * The `mapMe` method behaves like the native `map` method, returning a new array
 * with the results of calling a provided function on every element in the original array.
 * 
 * Example:
 * const arr = [1, 2, 3];
 * const result = arr.mapMe(function (item) {
 *     return item * 2;
 * });
 * console.log(result); // Output: [2, 4, 6]
 */

/**
 * Implements a custom `mapMe` method similar to the native `map` function.
 * @param {function} fn - The callback function to execute on each element.
 * @return {Array} - A new array with the results of calling the callback on each element.
 */
Array.prototype.mapMe = function (fn) {
    const myArray = this; // Reference to the original array
    const newArray = []; // Array to store the transformed elements

    // If the array is empty, return an empty array
    if (!myArray.length) {
        return newArray;
    }

    // Iterate through the array
    for (let i = 0; i < myArray.length; i++) {
        // Call the callback function with the current element, index, and array
        const item = fn(myArray[i], i, myArray);
        newArray.push(item); // Add the transformed element to the new array
    }

    return newArray; // Return the new array
};

// Example usage
const arr1 = [1, 2, 3];

// Example 1: Logging each element
const result = arr1.mapMe(function (item) {
    console.log(item);
    return item; // Return the same item to avoid undefined in the result
});
console.log('result', result); // Output: [1, 2, 3]

// Example 2: Doubling each element
const result1 = arr1.mapMe(function (item) {
    return item * 2;
});
console.log('result1', result1); // Output: [2, 4, 6]