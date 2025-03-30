/*
 * Function to calculate the power of a number using recursion.
 * The function takes a base and an exponent and returns the result of base^exponent.
 * 
 * Example:
 * console.log(power(2, 4)); // Output: 16
 * console.log(power(3, 3)); // Output: 27
 * console.log(power(5, 0)); // Output: 1
 */

/**
 * Calculates the power of a number using recursion.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to which the base is raised.
 * @return {number} - The result of base^exponent.
 */
function power(base, exponent) {
    // Base case: Any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }

    // Recursive case: Multiply the base by the result of power(base, exponent - 1)
    return base * power(base, exponent - 1);
}

// Example usage
console.log(power(2, 4)); // Output: 16
console.log(power(3, 3)); // Output: 27
console.log(power(5, 0)); // Output: 1
console.log(power(7, 2)); // Output: 49