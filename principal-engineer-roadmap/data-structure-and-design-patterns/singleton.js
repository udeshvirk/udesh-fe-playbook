/*
 * Singleton Pattern Implementation in JavaScript
 * Ensures that only one instance of a class is created and provides a global point of access to it.
 */

// ===============================
// Singleton using a Static Method
class Printer {
    constructor(pages) {
        this.display = function () {
            console.log(`You are connected to the printer. You want to print ${pages} pages.`);
        };
    }

    // Static method to get the single instance of the Printer class
    static getInstance(numOfPages) {
        if (!Printer.instance) {
            Printer.instance = new Printer(numOfPages); // Create a new instance if it doesn't exist
        }
        return Printer.instance; // Return the existing instance
    }
}

// Example usage
const printer1 = Printer.getInstance(2);
console.log(printer1);
printer1.display();

const printer2 = Printer.getInstance(3);
console.log(printer2);
printer2.display();

console.log("Are printer1 and printer2 the same instance?", printer1 === printer2); // Output: true

// ===============================
// Singleton using a Class Constructor
class SingleTon {
    constructor() {
        if (!SingleTon.instance) {
            this.items = []; // Initialize an array to store items
            Object.freeze(this); // Freeze the instance to prevent modifications
            SingleTon.instance = this; // Store the instance
        }
        return SingleTon.instance; // Return the existing instance
    }

    // Method to get all items
    get() {
        return this.items;
    }

    // Method to add an item to the array
    push(item) {
        this.items.push(item);
    }
}

// Example usage
const singleton1 = new SingleTon();
singleton1.push(1);
singleton1.push(2);
console.log("singleton1 items:", singleton1.get()); // Output: [1, 2]

const singleton2 = new SingleTon();
console.log("singleton2 items:", singleton2.get()); // Output: [1, 2]

singleton2.push(3);
console.log("singleton1 items after push:", singleton1.get()); // Output: [1, 2, 3]
console.log("singleton2 items after push:", singleton2.get()); // Output: [1, 2, 3]

console.log("Are singleton1 and singleton2 the same instance?", singleton1 === singleton2); // Output: true

// ===============================
// Singleton using a Function Constructor
function SingleTon2() {
    if (SingleTon2._instance) {
        return SingleTon2._instance; // Return the existing instance if it exists
    }

    let counter = 0; // Private variable to store the counter

    // Method to increase the counter
    this.increase = function () {
        counter++;
    };

    // Method to show the current counter value
    this.showCounter = function () {
        return counter;
    };

    Object.freeze(this); // Freeze the instance to prevent modifications
    SingleTon2._instance = this; // Store the instance
}

// Example usage
const counter1 = new SingleTon2();
const counter2 = new SingleTon2();

counter1.increase();
counter1.increase();
counter1.increase();
counter1.increase();

console.log("Counter1 value:", counter1.showCounter()); // Output: 4
console.log("Counter2 value:", counter2.showCounter()); // Output: 4

console.log("Are counter1 and counter2 the same instance?", counter1 === counter2); // Output: true