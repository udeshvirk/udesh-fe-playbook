/*
 * Generate all binary strings from a given pattern with wildcards ('?').
 * Link: https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/
 */

/**
 * Extends the String prototype to allow replacing a character at a specific index.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The character to replace with.
 * @return {string} - The modified string.
 */
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1);
};

/**
 * Recursively generates all binary strings by replacing wildcards ('?') with '0' and '1'.
 * @param {string} str - The input string containing wildcards ('?').
 * @param {string} char - The wildcard character to replace (e.g., '?').
 * @param {number} index - The current index being processed.
 * @return {string[]} - An array of all possible binary strings.
 */
const generateBinaryStrings = (str, char, index = 0) => {
    let strings = [];

    // Base case: If the index reaches the end of the string, add the string to the result
    if (index === str.length) {
        strings.push(str);
        return strings;
    }

    // If the current character is the wildcard, replace it with '0' and '1'
    if (str[index] === char) {
        // Replace with '0' and recurse
        str = str.replaceAt(index, '0');
        strings = [...generateBinaryStrings(str, char, index + 1)];

        // Replace with '1' and recurse
        str = str.replaceAt(index, '1');
        strings = [...strings, ...generateBinaryStrings(str, char, index + 1)];
    } else {
        // If the current character is not a wildcard, move to the next index
        strings = [...generateBinaryStrings(str, char, index + 1)];
    }

    return strings;
};

// Example usage
let str = "1??0?101"; // Input string with wildcards ('?')
console.log("Generated Binary Strings:");
console.log(generateBinaryStrings(str, '?')); // Output: All possible binary strings