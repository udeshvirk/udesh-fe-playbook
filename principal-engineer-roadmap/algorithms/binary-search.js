/*
 * Binary Search Implementation in JavaScript
 * Efficiently finds the index of a target element in a sorted array.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * Performs binary search on a sorted array to find the target element.
 * @param {number[]} list - The sorted array to search in.
 * @param {number} item - The target element to find.
 * @return {number|null} - The index of the target element, or null if not found.
 */
const binarySearch = (list, item) => {
    let low = 0; // Start of the search range
    let high = list.length - 1; // End of the search range

    // Loop until the search range is valid
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Calculate the middle index
        const guess = list[mid]; // Get the middle element

        // Check if the middle element is the target
        if (guess === item) {
            return mid; // Return the index if found
        }

        // If the guess is greater than the target, search in the left half
        if (guess > item) {
            high = mid - 1;
        } else {
            // If the guess is less than the target, search in the right half
            low = mid + 1;
        }
    }

    return null; // Return null if the target is not found
};

// Example usage
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // Output: 0 (index of 1)
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // Output: 4 (index of 5)
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: null (6 not found)
console.log(binarySearch([], 1)); // Output: null (empty array)
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2 (index of 30)