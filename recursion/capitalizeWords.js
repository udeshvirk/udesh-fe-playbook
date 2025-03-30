/*
 * Function to capitalize all the words in an array using recursion.
 * 
 * Example:
 * let words = ['i', 'am', 'learning', 'recursion'];
 * console.log(capitalizedWords(words)); // Output: ['I', 'AM', 'LEARNING', 'RECURSION']
 */

/**
 * Capitalizes all the words in an array.
 * @param {string[]} array - The input array of words.
 * @return {string[]} - A new array with all words capitalized.
 */
const capitalizedWords = (array) => {
    // Base case: If the array has only one word, capitalize it and return as an array
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }

    // Recursive case: Process the array except the last word
    const res = capitalizedWords(array.slice(0, -1)); // Recursively capitalize all but the last word
    res.push(array[array.length - 1].toUpperCase()); // Capitalize the last word and add it to the result
    return res; // Return the result array
};

// Example usage
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // Output: ['I', 'AM', 'LEARNING', 'RECURSION']