/*
 * Function to collect all string values from a nested object using recursion.
 * 
 * Example:
 * const obj = {
 *     stuff: "foo",
 *     data: {
 *         val: {
 *             thing: {
 *                 info: "bar",
 *                 moreInfo: {
 *                     evenMoreInfo: {
 *                         weMadeIt: "baz"
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * };
 * console.log(collectStrings(obj)); // Output: ["foo", "bar", "baz"]
 */

/**
 * Collects all string values from a nested object.
 * @param {Object} obj - The input object.
 * @return {string[]} - An array of all string values found in the object.
 */
const collectStrings = (obj) => {
    let stringsArr = []; // Array to store string values

    // Iterate through each key in the object
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]); // Add string values to the array
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively collect strings from nested objects
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr; // Return the array of strings
};

// Example usage
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

console.log(collectStrings(obj)); // Output: ["foo", "bar", "baz"]