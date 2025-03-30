/*
 * Selection Sort Implementation in JavaScript
 * Selection Sort is a simple sorting algorithm that repeatedly selects the smallest element
 * from the unsorted portion of the array and swaps it with the first unsorted element.
 * Time Complexity: O(n^2), where n is the length of the array.
 * Space Complexity: O(1), as it performs sorting in place.
 */

/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {number[]} originalList - The array to be sorted.
 * @return {number[]} - The sorted array.
 */
const selectionSort = (originalList) => {
    // Create a copy of the original array to avoid mutating it
    const list = [...originalList];
    const len = list.length;

    // Iterate through the array
    for (let i = 0; i < len; i++) {
        let min = i; // Assume the current index is the minimum

        // Find the index of the smallest element in the unsorted portion
        for (let j = i + 1; j < len; j++) {
            if (list[j] < list[min]) {
                min = j; // Update the index of the minimum element
            }
        }

        // Swap the smallest element with the first unsorted element
        if (min !== i) {
            [list[i], list[min]] = [list[min], list[i]];
        }
    }

    return list; // Return the sorted array
};

// Example usage
const listOfNumbers = [1, 6, 3, 4, 5];
console.log(selectionSort(listOfNumbers)); // Output: [1, 3, 4, 5, 6]
console.log(listOfNumbers); // Output: [1, 6, 3, 4, 5] (original array remains unchanged)