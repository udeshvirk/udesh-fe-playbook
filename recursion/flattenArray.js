/*
 * Function to calculate the nth Fibonacci number using recursion.
 * The Fibonacci sequence is defined as:
 * fib(1) = 1, fib(2) = 1, and fib(n) = fib(n-1) + fib(n-2) for n > 2.
 * 
 * Example:
 * console.log(fib(5)); // Output: 5
 * console.log(fib(7)); // Output: 13
 */

/**
 * Calculates the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence (1-based index).
 * @return {number} - The nth Fibonacci number.
 */
const fib = (n) => {
    // Base case: The first two Fibonacci numbers are 1
    if (n <= 2) return 1;

    // Recursive case: Sum of the two preceding Fibonacci numbers
    return fib(n - 1) + fib(n - 2);
};

// Example usage
console.log(fib(5)); // Output: 5
console.log(fib(7)); // Output: 13
console.log(fib(10)); // Output: 55