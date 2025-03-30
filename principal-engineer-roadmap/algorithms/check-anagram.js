/*
 * Function to check if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of another.
 * Time Complexity: O(n), where n is the length of the strings.
 * Space Complexity: O(n), due to the lookup object.
 */

/**
 * Checks if two strings are anagrams of each other.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @return {boolean} - Returns true if the strings are anagrams, otherwise false.
 */
const validAnagram = (str1, str2) => {
    // If the lengths of the strings are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {}; // Object to store the frequency of characters in str1

    // Populate the lookup object with the frequency of characters in str1
    for (const char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    // Check if str2 matches the character frequencies in the lookup object
    for (const char of str2) {
        if (!lookup[char]) {
            return false; // If a character is missing or its frequency is zero, return false
        } else {
            lookup[char] -= 1; // Decrement the frequency of the character
        }
    }

    return true; // If all checks pass, the strings are anagrams
};

// Example usage
console.log(validAnagram('', '')); // Output: true (both are empty strings)
console.log(validAnagram('aaz', 'zza')); // Output: false
console.log(validAnagram('anagram', 'nagaram')); // Output: true
console.log(validAnagram('rat', 'car')); // Output: false
console.log(validAnagram('awesome', 'awesom')); // Output: false
console.log(validAnagram('qwerty', 'yrtweq')); // Output: true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // Output: true