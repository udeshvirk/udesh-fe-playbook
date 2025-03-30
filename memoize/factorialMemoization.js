/*
 * Factorial Implementation with Memoization in JavaScript
 * Memoization is used to store previously computed results to optimize recursive calls.
 * Time Complexity: O(n), where n is the input number.
 * Space Complexity: O(n), due to the recursion stack and cache storage.
 */

/**
 * Creates a memoized factorial function.
 * @return {function} - A memoized factorial function.
 */
function factorial() {
    const cache = {}; // Cache to store previously computed factorials

    // Inner recursive function to compute factorial
    const innerFact = (n) => {
        if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1

        if (!cache[n]) {
            cache[n] = n * innerFact(n - 1); // Compute and store in cache if not already cached
        }

        return cache[n]; // Return the cached result
    };

    return innerFact; // Return the memoized factorial function
}

// Example usage
const factorialMe = factorial();
console.log(factorialMe(3)); // Output: 6
console.log(factorialMe(5)); // Output: 120
console.log(factorialMe(3)); // Output: 6 (retrieved from cache)