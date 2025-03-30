/*
 * Function to reverse a string using recursion.
 * 
 * Example:
 * console.log(reverse("hello")); // Output: "olleh"
 * console.log(reverse("world")); // Output: "dlrow"
 * console.log(reverse("a"));     // Output: "a"
 */

/**
 * Reverses a string using recursion.
 * @param {string} str - The input string to reverse.
 * @return {string} - The reversed string.
 */
const reverse = (str) => {
    // Base case: If the string has 1 or fewer characters, return it as is
    if (str.length <= 1) return str;

    // Recursive case: Reverse the rest of the string and append the first character
    return reverse(str.slice(1)) + str[0];
};

// Example usage
console.log(reverse("hello")); // Output: "olleh"
console.log(reverse("world")); // Output: "dlrow"
console.log(reverse("a"));     // Output: "a"
console.log(reverse(""));      // Output: ""