/*
 * Function to count inversions in an array using a modified merge sort algorithm.
 * An inversion is a pair of indices (i, j) such that i < j and arr[i] > arr[j].
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * Merges two subarrays and counts the inversions.
 * @param {number[]} arr - The array to process.
 * @param {number} l - The starting index of the left subarray.
 * @param {number} m - The ending index of the left subarray (middle index).
 * @param {number} r - The ending index of the right subarray.
 * @return {number} - The number of inversions in the merged subarray.
 */
const mergeAndCount = (arr, l, m, r) => {
    // Left and right subarrays
    const left = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l, swaps = 0;

    // Merge the two subarrays while counting inversions
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i); // Count inversions
        }
    }

    // Copy remaining elements of the left subarray, if any
    while (i < left.length) {
        arr[k++] = left[i++];
    }

    // Copy remaining elements of the right subarray, if any
    while (j < right.length) {
        arr[k++] = right[j++];
    }

    return swaps;
};

/**
 * Recursively sorts the array and counts inversions using merge sort.
 * @param {number[]} arr - The array to process.
 * @param {number} l - The starting index of the array.
 * @param {number} r - The ending index of the array.
 * @return {number} - The total number of inversions in the array.
 */
const mergeSortAndCount = (arr, l, r) => {
    let count = 0;

    if (l < r) {
        const m = Math.floor((l + r) / 2);

        // Recursively count inversions in the left and right subarrays
        count += mergeSortAndCount(arr, l, m);
        count += mergeSortAndCount(arr, m + 1, r);

        // Count inversions during the merge step
        count += mergeAndCount(arr, l, m, r);
    }

    return count;
};

// Example usage
const arr = [1, 20, 6, 4, 5];
console.log("Number of inversions:", mergeSortAndCount(arr, 0, arr.length - 1)); // Output: 5