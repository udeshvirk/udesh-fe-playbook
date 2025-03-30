/*
 * This file demonstrates tricky JavaScript concepts such as `this` binding, hoisting, and asynchronous behavior.
 */

// Example 1: `this` Binding with `apply`
var x = 7; // Global variable `x`
let abc = {
    x: 9 // Property `x` inside the object `abc`
};

const xyz = () => {
    // Arrow functions do not have their own `this`. They inherit `this` from their lexical scope.
    console.log('X===>', this.x); // Output: `undefined` because `this` refers to the global object, and `this.x` is not defined in strict mode.
};
xyz.apply(abc); // `apply` does not change `this` for arrow functions.

// Example 2: `this` Binding with Regular Functions
var x = 7; // Global variable `x`

function xyz() {
    // Regular functions have their own `this`, which is determined by how the function is called.
    console.log('X===>', this.x); // Output: `7` when called in the global context.
}
xyz(); // `this` refers to the global object in non-strict mode.

// Example 3: Hoisting
a = 10; // Assigning a value to `a` before declaring it.
console.log(a); // Output: `10` because `a` is hoisted as a `var` variable.
var a = 5; // Declaration of `a` is hoisted to the top, but the assignment happens later.

// Example 4: Asynchronous Behavior
console.log(1); // Output: `1` (synchronous)
setTimeout(() => {
    console.log(2); // Output: `2` (asynchronous, executed after the current call stack is cleared)
});
console.log(3); // Output: `3` (synchronous)
Promise.resolve(4).then((val) => {
    console.log(val); // Output: `4` (microtask, executed after the current synchronous code but before `setTimeout`)
});
console.log(5); // Output: `5` (synchronous)

/*
 * Final Output Order:
 * 1
 * 3
 * 5
 * 4
 * 2
 */