/*
 * MinHeap Implementation in JavaScript
 * A MinHeap is a binary tree where the parent node is always smaller than its child nodes.
 * Provides methods for insertion, removal, and retrieving the minimum element.
 */

class MinHeap {
    constructor() {
        // Initialize the heap array with a dummy element at index 0 for easier index calculations
        this.heap = [null];
    }

    // Get the minimum element (root of the heap)
    getMin() {
        return this.heap[1] || null; // Return the root element or null if the heap is empty
    }

    // Insert a new node into the heap
    insert(node) {
        // Add the new node at the end of the heap array
        this.heap.push(node);

        // Bubble up the new node to maintain the heap property
        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            // Traverse up the tree while the current node is smaller than its parent
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
                // Swap the current node with its parent
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]];
                current = Math.floor(current / 2); // Move up to the parent node
            }
        }
    }

    // Remove and return the smallest element (root of the heap)
    remove() {
        // The smallest element is at index 1
        const smallest = this.heap[1];

        // If the heap has more than two elements
        if (this.heap.length > 2) {
            // Replace the root with the last element
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1); // Remove the last element

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            // Bubble down the root element to maintain the heap property
            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])
            ) {
                // Swap with the smaller child
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }

            // Handle the case where only the left child exists
            if (this.heap[leftChildIndex] && this.heap[current] > this.heap[leftChildIndex]) {
                [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
            }
        }
        // If the heap has exactly two elements, remove the root
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null; // Return null if the heap is empty
        }

        return smallest; // Return the smallest element
    }
}

// Example usage
const minHeap = new MinHeap();

// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(30);

console.log("Heap after insertions:", minHeap.heap); // Output: [null, 5, 15, 10, 20, 30]

// Get the minimum element
console.log("Minimum element:", minHeap.getMin()); // Output: 5

// Remove elements from the heap
console.log("Removed element:", minHeap.remove()); // Output: 5
console.log("Heap after removal:", minHeap.heap); // Output: [null, 10, 15, 30, 20]

console.log("Removed element:", minHeap.remove()); // Output: 10
console.log("Heap after removal:", minHeap.heap); // Output: [null, 15, 20, 30]