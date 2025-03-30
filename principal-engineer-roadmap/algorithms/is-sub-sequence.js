/*
 * Find the index of the first 1 in a sorted array of 0’s and 1’s.
 * 
 * Input : arr[] = {0, 0, 0, 0, 0, 0, 1, 1, 1, 1}
 * Output : 6
 * The index of the first 1 in the array is 6.
 * 
 * Input : arr[] = {0, 0, 0, 0}
 * Output : -1
 * 1's are not present in the array.
 * 
 * Link: https://www.geeksforgeeks.org/find-index-first-1-sorted-array-0s-1s/
 */

/**
 * Finds the index of the first occurrence of 1 in a sorted array of 0's and 1's.
 * @param {number[]} arr - The sorted array of 0's and 1's.
 * @return {number} - The index of the first 1, or -1 if 1 is not present.
 */
const indexOfFirstOne = (arr) => {
    let low = 0, high = arr.length - 1;

    // Perform binary search
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Calculate the middle index

        // Check if the current element is the first occurrence of 1
        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            return mid; // Return the index of the first 1
        }

        // If the current element is 1, search in the left half
        else if (arr[mid] === 1) {
            high = mid - 1;
        }

        // If the current element is 0, search in the right half
        else {
            low = mid + 1;
        }
    }

    // If no 1's are found, return -1
    return -1;
};

// Example usage
const arr1 = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
const arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
const arr3 = [0, 0, 0, 0];
const arr4 = [1, 1, 1, 1];

console.log(indexOfFirstOne(arr1)); // Output: 6
console.log(indexOfFirstOne(arr2)); // Output: 10
console.log(indexOfFirstOne(arr3)); // Output: -1
console.log(indexOfFirstOne(arr4)); // Output: 0