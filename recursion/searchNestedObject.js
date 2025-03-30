/*
 * Function to search for a value in a nested object.
 * The function returns true if the object contains the specified value, otherwise false.
 * 
 * Example:
 * const nestedObject = { a: { b: { c: { d: 44 } } } };
 * console.log(contains(nestedObject, 44)); // Output: true
 * console.log(contains(nestedObject, 100)); // Output: false
 */

/**
 * Searches for a value in a nested object.
 * @param {Object} obj - The input nested object.
 * @param {*} val - The value to search for.
 * @return {boolean} - Returns true if the value is found, otherwise false.
 */
function contains(obj, val) {
    for (const [key, value] of Object.entries(obj)) {
        // If the current value matches the target value, return true
        if (value === val) {
            return true;
        }

        // If the current value is an object, recursively search within it
        if (typeof value === 'object' && value !== null) {
            if (contains(value, val)) {
                return true;
            }
        }
    }

    // If the value is not found, return false
    return false;
}

// Example usage
const nestedObject = {
    a: {
        b: {
            c: {
                d: 44
            }
        }
    }
};

console.log(contains(nestedObject, 44)); // Output: true
console.log(contains(nestedObject, 100)); // Output: false
console.log(contains(nestedObject, null)); // Output: false