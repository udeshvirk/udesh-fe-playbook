/*
 * Merge Sort Implementation in JavaScript
 * Merge Sort is a divide-and-conquer algorithm that splits the array into halves,
 * recursively sorts them, and then merges the sorted halves.
 * Time Complexity: O(n log n), where n is the length of the array.
 * Space Complexity: O(n), due to the temporary arrays used during merging.
 */

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {number[]} a - The first sorted array.
 * @param {number[]} b - The second sorted array.
 * @return {number[]} - The merged sorted array.
 */
const _mergeArrays = (a, b) => {
    const c = []; // Array to store the merged result

    // Merge elements from both arrays in sorted order
    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift());
    }

    // Add any remaining elements from array `a`
    while (a.length) {
        c.push(a.shift());
    }

    // Add any remaining elements from array `b`
    while (b.length) {
        c.push(b.shift());
    }

    return c; // Return the merged sorted array
};

/**
 * Sorts an array using the Merge Sort algorithm.
 * @param {number[]} a - The array to be sorted.
 * @return {number[]} - The sorted array.
 */
const mergeSort = (a) => {
    // Base case: An array of length 0 or 1 is already sorted
    if (a.length < 2) return a;

    // Split the array into two halves
    const middle = Math.floor(a.length / 2);
    const a_l = a.slice(0, middle); // Left half
    const a_r = a.slice(middle);   // Right half

    // Recursively sort both halves
    const sorted_l = mergeSort(a_l);
    const sorted_r = mergeSort(a_r);

    // Merge the sorted halves
    return _mergeArrays(sorted_l, sorted_r);
};

// Example usage
console.log(mergeSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // Output: [0, 1, 1, 3, 4, 4, 5, 6, 8]