/*
 * Function to check if a string has balanced parentheses.
 * The function uses a stack to ensure that every opening parenthesis has a corresponding closing parenthesis
 * in the correct order.
 * 
 * Example:
 * console.log(balancedParentheses("{[]()}")); // Output: true
 * console.log(balancedParentheses("{[(])}")); // Output: false
 * console.log(balancedParentheses("{[}]"));   // Output: false
 */

/**
 * Checks if a string has balanced parentheses.
 * @param {string} str - The input string containing parentheses.
 * @return {boolean} - Returns true if the parentheses are balanced, otherwise false.
 */
function balancedParentheses(str) {
    const stack = []; // Stack to keep track of opening parentheses
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // If the character is a closing parenthesis
        else {
            const lastEle = stack.pop(); // Pop the last opening parenthesis from the stack

            // Return false if the popped element doesn't match the corresponding closing parenthesis
            if (char !== map[lastEle]) {
                return false;
            }
        }
    }

    // If the stack is not empty at the end, return false
    return stack.length === 0;
}

// Example usage
console.log(balancedParentheses("{[]()}")); // Output: true
console.log(balancedParentheses("{[(])}")); // Output: false
console.log(balancedParentheses("{[}]"));   // Output: false