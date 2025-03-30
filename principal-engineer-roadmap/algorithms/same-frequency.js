/*
 * Reverse a string without affecting special characters.
 * 
 * Example:
 * const str1 = "a,b$c";
 * const str2 = "Ab,c,de!$";
 * 
 * console.log(reverseString(str1)); // Output: "c,b$a"
 * console.log(reverseString(str2)); // Output: "ed,c,bA!$"
 * 
 * Link: https://www.geeksforgeeks.org/reverse-a-string-without-affecting-special-characters/
 */

/**
 * Reverses a string without affecting special characters.
 * @param {string} str - The input string.
 * @return {string} - The reversed string with special characters unaffected.
 */
const reverseString = (str) => {
    const temp = []; // Stack to store alphabetic characters
    const alphabetRegex = /[a-z]/i; // Regex to match alphabetic characters

    // Collect all alphabetic characters in reverse order
    for (let s of str) {
        if (alphabetRegex.test(s)) {
            temp.push(s);
        }
    }

    let reverse = ''; // Result string

    // Reconstruct the string with reversed alphabetic characters
    for (let s of str) {
        if (alphabetRegex.test(s)) {
            reverse += temp.pop(); // Replace with reversed character
        } else {
            reverse += s; // Keep special characters in place
        }
    }

    return reverse;
};

// Example usage
const str1 = "a,b$c";
const str2 = "Ab,c,de!$";

console.log(reverseString(str1)); // Output: "c,b$a"
console.log(reverseString(str2)); // Output: "ed,c,bA!$"