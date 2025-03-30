/*
 * Bubble Sort Implementation in JavaScript
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * Time Complexity: O(n^2) in the worst and average cases, O(n) in the best case (already sorted).
 * Space Complexity: O(1) (in-place sorting).
 */

/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {number[]} originalArray - The array to be sorted.
 * @return {number[]} - The sorted array.
 */
const bubbleSort = (originalArray) => {
    const a = [...originalArray]; // Create a copy of the original array to avoid mutating it
    let swapped = false; // Flag to track if any swaps were made during an iteration

    // Outer loop to control the number of passes
    for (let i = 1; i < a.length; i++) {
        swapped = false; // Reset the swapped flag at the start of each pass

        // Inner loop to compare adjacent elements
        for (let j = 0; j < a.length - i; j++) {
            if (a[j + 1] < a[j]) {
                // Swap adjacent elements if they are in the wrong order
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true; // Mark that a swap was made
            }
        }

        // If no swaps were made during the pass, the array is already sorted
        if (!swapped) {
            break; // Exit the loop early for optimization
        }
    }

    return a; // Return the sorted array
};

// Example usage
console.log(bubbleSort([9, 1, 3, 8, 4, 7])); // Output: [1, 3, 4, 7, 8, 9]
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(bubbleSort([1, 2, 3, 4, 5]));    // Output: [1, 2, 3, 4, 5] (already sorted)
console.log(bubbleSort([]));                 // Output: [] (empty array)