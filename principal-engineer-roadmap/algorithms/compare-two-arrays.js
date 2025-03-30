/*
 * Function to compare two arrays to determine if they have the same elements
 * with the same frequencies, regardless of order.
 * Time Complexity: O(n), where n is the length of the arrays.
 * Space Complexity: O(n), due to the frequency counter objects.
 */

/**
 * Compares two arrays to check if they have the same elements with the same frequencies.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {boolean} - Returns true if the arrays are the same, otherwise false.
 */
const sameArray = (arr1, arr2) => {
    // If the lengths of the arrays are not equal, they cannot be the same
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyCounter1 = {}; // Object to store the frequency of elements in arr1
    const frequencyCounter2 = {}; // Object to store the frequency of elements in arr2

    // Populate the frequency counter for arr1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // Populate the frequency counter for arr2
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Compare the frequency counters
    for (let key in frequencyCounter1) {
        // Check if the key exists in frequencyCounter2
        if (!(key in frequencyCounter2)) {
            return false;
        }

        // Check if the frequencies match
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true; // If all checks pass, the arrays are the same
};

// Example usage
console.log(sameArray([1, 2, 3, 2, 5], [3, 1, 2, 5, 2])); // Output: true
console.log(sameArray([1, 2, 3], [1, 2, 2])); // Output: false
console.log(sameArray([], [])); // Output: true (both arrays are empty)
console.log(sameArray([1, 2, 3], [3, 2, 1, 4])); // Output: false
console.log(sameArray([1, 1, 1], [1, 1, 1])); // Output: true