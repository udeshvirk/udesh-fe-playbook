/*
 * Functions to traverse a 2D matrix in a spiral order.
 * Includes three implementations:
 * 1. Using ES6 features.
 * 2. Without recursion (iterative approach).
 * 3. With recursion.
 * 
 * Example:
 * const input = [
 *     [1, 2, 3, 4],
 *     [5, 6, 7, 8],
 *     [9, 10, 11, 12],
 *     [13, 14, 15, 16]
 * ];
 * 
 * console.log(spiralEs6(input)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 * console.log(spiralTraversal(input)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 * console.log(spiralTraversalRecursion(input)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */

const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// 1. Using ES6 features
const spiralEs6 = function (matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(), // Right
            ...matrix.map(a => a.pop()), // Down
            ...(matrix.pop() || []).reverse(), // Bottom
            ...matrix.map(a => a.shift()).reverse() // Up
        );
    }
    return arr;
};

// 2. Without recursion (iterative approach)
const spiralTraversal = function (matrix) {
    let result = [];
    while (matrix.length) {
        // Right
        result = result.concat(matrix.shift());

        // Down
        for (let j = 0; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // Bottom
        if (matrix.length) {
            result = result.concat(matrix.pop().reverse());
        }

        // Up
        for (let k = matrix.length - 1; k >= 0; k--) {
            result.push(matrix[k].shift());
        }
    }
    return result;
};

// 3. With recursion
const spiralTraversalRecursion = function (matrix) {
    let result = [];

    const goAround = function (matrix) {
        if (matrix.length === 0) {
            return;
        }

        // Right
        result = result.concat(matrix.shift());

        // Down
        for (let j = 0; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // Bottom
        if (matrix.length) {
            result = result.concat(matrix.pop().reverse());
        }

        // Up
        for (let k = matrix.length - 1; k >= 0; k--) {
            result.push(matrix[k].shift());
        }

        // Recursive call
        goAround(matrix);
    };

    goAround(matrix);

    return result;
};

// Example usage
console.log('ES6:', spiralEs6([...input])); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
console.log('Iterative:', spiralTraversal([...input])); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
console.log('Recursive:', spiralTraversalRecursion([...input])); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]