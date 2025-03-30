/*
 * Function to remove duplicate words from a string.
 * 
 * Example:
 * Input: "This is test test string"
 * Output: "This is test string"
 */

/**
 * Removes duplicate words from a given string.
 * @param {string} str - The input string containing words.
 * @return {string} - A string with duplicate words removed.
 */
function removeDuplicateString(str) {
    // Split the string into an array of words, create a Set to remove duplicates,
    // and join the words back into a single string.
    return Array.from(new Set(str.split(" "))).join(" ");
}

// Example usage
console.log(removeDuplicateString("This is test test string")); // Output: "This is test string"
console.log(removeDuplicateString("hello hello world world"));  // Output: "hello world"
console.log(removeDuplicateString("unique words only"));        // Output: "unique words only"
console.log(removeDuplicateString(""));                         // Output: ""