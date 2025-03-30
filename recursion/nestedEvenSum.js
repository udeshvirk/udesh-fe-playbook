/*
 * Function to calculate the sum of all even numbers in a nested object using recursion.
 * 
 * Example:
 * const obj1 = {
 *     outer: 2,
 *     obj: {
 *         inner: 2,
 *         otherObj: {
 *             superInner: 2,
 *             notANumber: true,
 *             alsoNotANumber: "yup"
 *         }
 *     }
 * };
 * console.log(nestedEvenSum(obj1)); // Output: 6
 */

/**
 * Calculates the sum of all even numbers in a nested object.
 * @param {Object} obj - The input object.
 * @param {number} sum - The running total of even numbers (default is 0).
 * @return {number} - The sum of all even numbers in the object.
 */
const nestedEvenSum = (obj, sum = 0) => {
    // Iterate through each key in the object
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            // If the value is an object, recursively calculate the sum
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            // If the value is an even number, add it to the sum
            sum += obj[key];
        }
    }
    return sum; // Return the total sum
};

// Example usage
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // Output: 6
console.log(nestedEvenSum(obj2)); // Output: 10