/*
 * Function to recursively convert all number values in an object to strings.
 * 
 * Example:
 * const obj = {
 *     num: 1,
 *     test: [],
 *     data: {
 *         val: 4,
 *         info: {
 *             isRight: true,
 *             random: 66
 *         }
 *     }
 * };
 * 
 * console.log(stringifyNumbers(obj));
 * // Output:
 * // {
 * //     num: "1",
 * //     test: [],
 * //     data: {
 * //         val: "4",
 * //         info: {
 * //             isRight: true,
 * //             random: "66"
 * //         }
 * //     }
 * // }
 */

/**
 * Recursively converts all number values in an object to strings.
 * @param {Object} obj - The input object.
 * @return {Object} - A new object with all numbers converted to strings.
 */
const stringifyNumbers = (obj) => {
    const newObj = {}; // Create a new object to avoid mutating the original

    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            // Convert number to string
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            // Recursively process nested objects
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            // Copy other values as-is
            newObj[key] = obj[key];
        }
    }

    return newObj; // Return the new object
};

// Example usage
const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

console.log(stringifyNumbers(obj));
// Output:
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }