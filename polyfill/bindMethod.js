/*
 * Polyfill for the `bind` method in JavaScript.
 * The `bindMe` method creates a new function that, when called, has its `this` keyword set to the provided context,
 * with optional arguments for currying.
 * 
 * Example:
 * const fn1 = fn.bindMe(context);
 * fn1();
 */

/**
 * Implements a custom `bindMe` method similar to the native `bind` function.
 * @param {Object} context - The object to bind as the `this` context.
 * @param {...*} curry - Optional arguments for currying.
 * @return {function} - A new function with the bound context and arguments.
 */
Function.prototype.bindMe = function (context, ...curry) {
    const fn = this; // Reference to the original function
    return function (...params) {
        return fn.apply(context, [...curry, ...params]); // Use `apply` to bind context and pass arguments
    };
};

// Example usage
let student1 = {
    name: 'sandeep',
    score: 10,
    getScore: function () {
        return this.score;
    }
};

console.log(student1.getScore()); // Output: 10

let employee1 = {
    score: 11
};

// Bind `employee1` as the context for `getScore`
const employeeScore = student1.getScore.bindMe(employee1);
console.log(employeeScore()); // Output: 11