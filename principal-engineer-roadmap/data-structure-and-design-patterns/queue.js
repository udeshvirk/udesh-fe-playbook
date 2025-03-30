/*
 * Queue Data Structure Implementation in JavaScript
 * Follows the principle of FIFO (First In, First Out)
 */

class Queue {
    constructor() {
        this.#items = []; // Private array to store queue elements
    }

    // Check if the queue is empty
    isEmpty() {
        return this.#items.length === 0;
    }

    // Add an element to the end of the queue
    enqueue(val) {
        this.#items.push(val); // Use array's push method for O(1) insertion
    }

    // Remove and return the element at the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.error("Queue Underflow: Cannot dequeue from an empty queue.");
            return null; // Return null if the queue is empty
        }
        return this.#items.shift(); // Use array's shift method for O(n) removal
    }

    // Get the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            console.error("Queue is empty: No front element to peek.");
            return null; // Return null if the queue is empty
        }
        return this.#items[0]; // Return the first element
    }

    // Get the current size of the queue
    size() {
        return this.#items.length; // Return the length of the array
    }

    // Print all elements in the queue
    print() {
        console.log("Queue contents:", this.#items); // Log the queue elements
    }
}

// Example usage of the Queue class
const queue = new Queue();

console.log("Is the queue empty?", queue.isEmpty()); // Output: true

// Enqueue elements
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue size after enqueues:", queue.size()); // Output: 3
queue.print(); // Output: Queue contents: [1, 2, 3]

// Peek at the front element
console.log("Front element (peek):", queue.peek()); // Output: 1

// Dequeue elements
console.log("Dequeued element:", queue.dequeue()); // Output: 1
console.log("Queue size after dequeue:", queue.size()); // Output: 2
queue.print(); // Output: Queue contents: [2, 3]

// Dequeue all elements
queue.dequeue();
queue.dequeue();
console.log("Is the queue empty after dequeues?", queue.isEmpty()); // Output: true
queue.dequeue(); // Attempt to dequeue from an empty queue (Underflow)