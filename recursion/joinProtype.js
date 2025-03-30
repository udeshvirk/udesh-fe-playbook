/*
 * Custom implementation of the `join` method using recursion.
 * The `joinMe` method concatenates all elements of an array into a string, separated by a specified joiner.
 * 
 * Example:
 * const arr = ['A', 'B', 'C', 'D'];
 * console.log(arr.joinMe('=>')); // Output: "A=>B=>C=>D"
 */

/**
 * Implements a custom `joinMe` method similar to the native `join` function.
 * @param {string} joiner - The string to separate each element in the array.
 * @return {string} - A string with all array elements joined by the specified joiner.
 */
Array.prototype.joinMe = function (joiner) {
    const arr = this; // Reference to the array

    /**
     * Recursive helper function to join array elements.
     * @param {number} index - The current index in the array.
     * @param {string} str - The accumulated string so far.
     * @return {string} - The final joined string.
     */
    function join(index, str) {
        str += arr[index]; // Add the current element to the string

        // Base case: If the last element is reached, return the string
        if (index === arr.length - 1) {
            return str;
        }

        // Recursive case: Add the joiner and process the next element
        return join(index + 1, str + joiner);
    }

    // Start the recursion with the first element and an empty string
    return join(0, '');
};

// Example usage
const arr = ['A', 'B', 'C', 'D'];
console.log(arr.joinMe('=>')); // Output: "A=>B=>C=>D"
console.log(arr.joinMe('-'));  // Output: "A-B-C-D"
console.log(arr.joinMe(''));   // Output: "ABCD"
console.log([].joinMe('=>'));  // Output: ""