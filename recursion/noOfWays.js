/*
 * Function to calculate the number of ways to make a given amount using a set of coins.
 * This function uses recursion to explore all possible combinations of coins.
 * 
 * Example:
 * const coins = [1, 2, 3];
 * const amount = 4;
 * console.log(returnWays(coins, coins.length - 1, amount)); 
 * // Output: 4 (combinations: [1,1,1,1], [1,1,2], [1,3], [2,2])
 */

/**
 * Calculates the number of ways to make a given amount using the provided coins.
 * @param {number[]} coins - Array of coin denominations.
 * @param {number} numOfCoins - Index of the current coin being considered.
 * @param {number} amount - The target amount to be made.
 * @return {number} - The number of ways to make the given amount.
 */
function returnWays(coins, numOfCoins, amount) {
    // Base case: If the amount is 0, there is exactly one way to make it (use no coins)
    if (amount === 0) return 1;

    // Base case: If the amount is negative, no solution exists
    if (amount < 0) return 0;

    // Base case: If no coins are left and the amount is still greater than 0, no solution exists
    if (numOfCoins < 0 && amount > 0) return 0;

    // Recursive case:
    // 1. Include the current coin and reduce the amount
    // 2. Exclude the current coin and move to the next coin
    return returnWays(coins, numOfCoins, amount - coins[numOfCoins]) +
        returnWays(coins, numOfCoins - 1, amount);
}

// Example usage
const coins = [1, 2, 3];
const amount = 4;
console.log(returnWays(coins, coins.length - 1, amount));
// Output: 4 (combinations: [1,1,1,1], [1,1,2], [1,3], [2,2])