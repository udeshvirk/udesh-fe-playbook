/**
 * Factory function to create a counter with private state.
 * This demonstrates the concept of closures by encapsulating the `privateCounter` variable
 * and providing controlled access to it through public methods.
 * 
 * @return {Object} - An object with `increment`, `decrement`, and `value` methods.
 */
function createCounter() {
    // Private variable to store the counter value
    let privateCounter = 0;

    /**
     * Private function to modify the counter value.
     * This function is not exposed outside the closure.
     * 
     * @param {number} val - The value to add to the counter (positive or negative).
     */
    function changeBy(val) {
        privateCounter += val;
    }

    // Return an object with public methods to interact with the counter
    return {
        /**
         * Increments the counter by 1.
         */
        increment: function () {
            changeBy(1);
        },

        /**
         * Decrements the counter by 1.
         */
        decrement: function () {
            changeBy(-1);
        },

        /**
         * Retrieves the current value of the counter.
         * 
         * @return {number} - The current value of the counter.
         */
        value: function () {
            return privateCounter;
        }
    };
}

// Create multiple independent counters
const counter1 = createCounter(); // First counter instance
const counter2 = createCounter(); // Second counter instance

// Example usage of the first counter
console.log(counter1.value()); // Output: 0 (initial value)
counter1.increment();          // Increment counter1 by 1
counter1.increment();          // Increment counter1 by 1 again
console.log(counter1.value()); // Output: 2 (counter1 value after two increments)
counter1.decrement();          // Decrement counter1 by 1
console.log(counter1.value()); // Output: 1 (counter1 value after one decrement)

// Example usage of the second counter
console.log(counter2.value()); // Output: 0 (initial value of counter2)
counter2.increment();          // Increment counter2 by 1
console.log(counter2.value()); // Output: 1 (counter2 value after one increment)