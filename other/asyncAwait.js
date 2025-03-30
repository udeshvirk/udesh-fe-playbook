/*
 * Demonstrates the use of async/await with multiple asynchronous functions.
 * Each function simulates an asynchronous operation using `setTimeout` and returns a promise.
 * The `doJobs` function executes these asynchronous functions sequentially using `await`.
 */

// Simulates an asynchronous operation with a 1-second delay
const a = () => new Promise(resolve => {
    setTimeout(() => resolve('result of a()'), 1000); // 1s delay
});

// Simulates an asynchronous operation with a 0.5-second delay
const b = () => new Promise(resolve => {
    setTimeout(() => resolve('result of b()'), 500); // 0.5s delay
});

// Simulates an asynchronous operation with a 1.1-second delay
const c = () => new Promise(resolve => {
    setTimeout(() => resolve('result of c()'), 1100); // 1.1s delay
});

/**
 * Executes the asynchronous functions `a`, `b`, and `c` sequentially using `await`.
 * @return {Promise<Array>} - A promise that resolves to an array of results from `a`, `b`, and `c`.
 */
const doJobs = async () => {
    try {
        const resultA = await a(); // Wait for `a` to complete
        const resultB = await b(); // Wait for `b` to complete
        const resultC = await c(); // Wait for `c` to complete

        return [resultA, resultB, resultC]; // Return the results as an array
    } catch (error) {
        throw new Error('Error in doJobs: ' + error); // Handle any errors
    }
};

// Call `doJobs` and handle the resolved promise or any errors
doJobs()
    .then((result) => {
        console.log('success:', result); // Log the results if successful
    })
    .catch((error) => {
        console.log('error:', error); // Log the error if something goes wrong
    });

// Normal synchronous operation
console.log('I am a sync operation!');