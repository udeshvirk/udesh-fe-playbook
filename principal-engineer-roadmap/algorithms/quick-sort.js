/*
 * Quick Sort Implementation in JavaScript
 * Quick Sort is a divide-and-conquer algorithm that selects a pivot element,
 * partitions the array into elements smaller and larger than the pivot,
 * and recursively sorts the partitions.
 * Time Complexity: O(n log n) on average, O(n^2) in the worst case.
 * Space Complexity: O(n) due to the use of additional arrays during partitioning.
 */

/**
 * Sorts an array using the Quick Sort algorithm.
 * @param {number[]} originalList - The array to be sorted.
 * @return {number[]} - The sorted array.
 */
const quickSort = (originalList) => {
    const list = [...originalList]; // Create a copy of the original array to avoid mutating it

    // Base case: An array of length 0 or 1 is already sorted
    if (list.length < 2) {
        return list;
    }

    const pivot = list[0]; // Select the first element as the pivot

    // Partition the array into elements smaller and larger than the pivot
    const smaller = list.filter((item) => item < pivot);
    const bigger = list.filter((item) => item > pivot);

    // Recursively sort the partitions and combine them with the pivot
    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};

// Example usage
const a = [1, 6, 3, 4, 5, 1, 0, 4, 8];

console.log(quickSort(a)); // Output: [0, 1, 1, 3, 4, 4, 5, 6, 8]
console.log(a); // Output: [1, 6, 3, 4, 5, 1, 0, 4, 8] (original array remains unchanged)