/*
 * This file demonstrates tricky JavaScript concepts related to `this` binding in arrow functions and regular functions.
 */

var namer = 'global name'; // Global variable `namer`

var obj = {
    namer: "Andhra Pradesh", // Property `namer` inside the object `obj`

    // Arrow function
    arrow: () => {
        // Arrow functions do not have their own `this`. They inherit `this` from their lexical scope.
        console.log(this.namer); // Output: 'global name' because `this` refers to the global object in non-strict mode.
    },

    // Regular function
    normal: function () {
        // Regular functions have their own `this`, which is determined by how the function is called.
        console.log(this.namer); // Output: 'Andhra Pradesh' because `this` refers to the `obj` object.
    }
};

// Calling the functions
obj.arrow(); // Output: 'global name'
obj.normal(); // Output: 'Andhra Pradesh'

// Repeating the calls for clarity
obj.arrow(); // Output: 'global name'
obj.normal(); // Output: 'Andhra Pradesh'

/*
 * Example of `this` behavior in a function
 */
function example() {
    this.namer = 'local'; // Assigning a new `namer` property to the `this` context of the function

    // Calling the functions inside the `example` function
    obj.arrow();  // Output: 'global name' because `this` in the arrow function still refers to the global object.
    obj.normal(); // Output: 'Andhra Pradesh' because `this` in the regular function refers to the `obj` object.
}

// Calling the `example` function
example();