/*
 * Generic Memoization Function in JavaScript
 * Memoization is used to optimize functions by caching previously computed results.
 * This implementation works for any single-argument function.
 */

/**
 * Computes the factorial of a number.
 * @param {number} n - The input number.
 * @return {number} - The factorial of the number.
 */
function factorial(n) {
    return (n === 1) ? n : n * factorial(n - 1);
}

/**
 * Creates a memoized version of a given function.
 * @param {function} fn - The function to be memoized.
 * @return {function} - A memoized version of the input function.
 */
function memoize(fn) {
    const cache = {}; // Cache to store previously computed results

    return (n) => {
        if (n in cache) {
            console.log('Retrieved from cache:', cache);
            return cache[n]; // Return the cached result if it exists
        } else {
            cache[n] = fn(n); // Compute and store the result in the cache
            return cache[n]; // Return the computed result
        }
    };
}

// Example usage
const factorialMe = memoize(factorial);
console.log(factorialMe(3)); // Output: 6 (computed)
console.log(factorialMe(3)); // Output: 6 (retrieved from cache)
console.log(factorialMe(5)); // Output: 120 (computed)
console.log(factorialMe(5)); // Output: 120 (retrieved from cache)