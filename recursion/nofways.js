//amount = 4
//coins = [1,2,3]
// result noOfCombination 4 , (1,1,1,1), (2,2), (1,3), (1,1,2)

function returnWays(coins, numOfCoins, amount) {

    if (amount === 0) return 1; // only one way to return zero amount

    if (amount < 0) return 0; // No solution exists for negative amount

    if (numOfCoins < 0 && amount > 0) return 0; // If no coins left

    return returnWays(coins, numOfCoins, amount - coins[numOfCoins]) +
        returnWays(coins, numOfCoins - 1, amount);
}

const coins = [1];
const amount = 4;
console.log(returnWays(coins, coins.length - 1, amount));