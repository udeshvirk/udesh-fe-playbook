/*
 * Stack Data Structure Implementation in JavaScript
 * Follows the principle of LIFO (Last In, First Out)
 */

export class Stack {
    // Private field to store stack items
    #items = [];

    // Check if the stack is empty
    isEmpty() {
        return this.#items.length === 0;
    }

    // Add an element to the top of the stack
    push(val) {
        this.#items.push(val); // Use array's push method for O(1) insertion
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.error("Stack Underflow: Cannot pop from an empty stack.");
            return null; // Return null to indicate no element was popped
        }
        return this.#items.pop(); // Use array's pop method for O(1) removal
    }

    // Get the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            console.error("Stack is empty: No top element to peek.");
            return null; // Return null if the stack is empty
        }
        return this.#items[this.#items.length - 1]; // Access the last element
    }

    // Get the current size of the stack
    size() {
        return this.#items.length; // Return the length of the array
    }

    // Print all elements in the stack
    print() {
        console.log("Stack contents:", this.#items); // Log the stack elements
    }
}

// Example usage of the Stack class
const stack = new Stack();

console.log("Is stack empty?", stack.isEmpty()); // Output: true

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack size after pushes:", stack.size()); // Output: 3
stack.print(); // Output: Stack contents: [1, 2, 3]

console.log("Top element (peek):", stack.peek()); // Output: 3

stack.pop(); // Removes 3
console.log("Stack size after pop:", stack.size()); // Output: 2
stack.print(); // Output: Stack contents: [1, 2]

stack.pop(); // Removes 2
stack.pop(); // Removes 1
stack.pop(); // Attempt to pop from an empty stack (Underflow)