/*
 * Function to calculate the product of all numbers in an array using recursion.
 * 
 * Example:
 * console.log(productOfArray([1, 2, 3, 10])); // Output: 60
 * console.log(productOfArray([]));           // Output: 1
 * console.log(productOfArray([5, 6]));       // Output: 30
 */

/**
 * Calculates the product of all numbers in an array.
 * @param {number[]} arr - The input array of numbers.
 * @return {number} - The product of all numbers in the array.
 */
function productOfArray(arr) {
    // Base case: If the array is empty, return 1 (multiplicative identity)
    if (arr.length === 0) {
        return 1;
    }

    // Recursive case: Multiply the last element with the product of the rest of the array
    return arr.pop() * productOfArray(arr);
}

// Example usage
console.log(productOfArray([1, 2, 3, 10])); // Output: 60
console.log(productOfArray([]));           // Output: 1
console.log(productOfArray([5, 6]));       // Output: 30