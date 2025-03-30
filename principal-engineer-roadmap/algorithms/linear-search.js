/*
 * Linear Search Implementation in JavaScript
 * Linear search is a simple algorithm that checks each element in the list sequentially
 * until the desired element is found or the list ends.
 * Time Complexity: O(n), where n is the length of the list.
 * Space Complexity: O(1), as it uses constant extra space.
 */

/**
 * Performs a linear search to find the index of a target element in a list.
 * @param {Array} list - The array to search in.
 * @param {*} item - The target element to find.
 * @return {number} - The index of the target element, or -1 if not found.
 */
const linearSearch = (list, item) => {
    // Iterate through the list with index and element
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i; // Return the index if the element matches the target
        }
    }
    return -1; // Return -1 if the target element is not found
};

// Example usage
console.log(linearSearch(['a', 'b', 'c', 'd'], 'd')); // Output: 3
console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(linearSearch([], 1)); // Output: -1 (empty array)