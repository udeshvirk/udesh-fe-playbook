/*
 * Function to check if there are duplicate values in the input arguments.
 * Two implementations are provided: one using a frequency counter and another using a Set.
 */

// Implementation 1: Using a Frequency Counter
const areThereDuplicates = (...args) => {
    let collection = {}; // Object to store the frequency of each value

    for (const val of args) {
        if (collection[val]) {
            return true; // Duplicate found
        }
        collection[val] = 1; // Mark the value as seen
    }

    return false; // No duplicates found
};

// Implementation 2: Using a Set
const areThereDuplicates2 = (...args) => {
    // A Set automatically removes duplicates, so compare its size with the input length
    return new Set(args).size !== args.length;
};

// Example usage
console.log(areThereDuplicates(1, 2, 3, 4)); // Output: false (no duplicates)
console.log(areThereDuplicates(1, 2, 3, 3, 4)); // Output: true (duplicate: 3)
console.log(areThereDuplicates('a', 'b', 'c')); // Output: false (no duplicates)
console.log(areThereDuplicates('a', 'b', 'a', 'c')); // Output: true (duplicate: 'a')

console.log(areThereDuplicates2(1, 2, 3, 4)); // Output: false (no duplicates)
console.log(areThereDuplicates2(1, 2, 3, 3, 4)); // Output: true (duplicate: 3)
console.log(areThereDuplicates2('a', 'b', 'c')); // Output: false (no duplicates)
console.log(areThereDuplicates2('a', 'b', 'a', 'c')); // Output: true (duplicate: 'a')