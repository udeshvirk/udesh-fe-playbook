/*
 * Function to check if a string is a palindrome using recursion.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 * 
 * Example:
 * console.log(isPalindrome("racecar")); // Output: true
 * console.log(isPalindrome("hello"));   // Output: false
 * console.log(isPalindrome("madam"));   // Output: true
 */

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The input string to check.
 * @return {boolean} - Returns true if the string is a palindrome, otherwise false.
 */
const isPalindrome = (str) => {
    // Base case: A single character string is always a palindrome
    if (str.length === 1) return true;

    // Base case: A two-character string is a palindrome if both characters are the same
    if (str.length === 2) return str[0] === str[1];

    // Recursive case: Check if the first and last characters are the same
    // and recursively check the substring excluding the first and last characters
    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1));
    }

    // If the first and last characters are not the same, it's not a palindrome
    return false;
};

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("madam"));   // Output: true
console.log(isPalindrome("a"));       // Output: true
console.log(isPalindrome("aa"));      // Output: true
console.log(isPalindrome("ab"));      // Output: false