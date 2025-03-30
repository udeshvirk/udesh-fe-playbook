/*
 * Demonstrates the behavior of Promises with `then`, `catch`, and `finally`.
 * This example shows how rejected promises are handled and how the chain of `then`, `catch`, and `finally` executes.
 */

// Start with a rejected promise
Promise.reject('Reject DATA!')
    .then((result) => {
        // This block won't be executed because the promise is rejected
        console.log('[1] then', result);
        return '[2] then payload';
    })
    .finally(() => {
        // `finally` is always executed, regardless of the promise state (resolved or rejected)
        console.log('[1] finally'); // Output: [1] finally
        return '[1] finally payload'; // Note: The return value of `finally` is ignored
    })
    .then((result) => {
        // This block won't be executed because the promise is still rejected
        console.log('[2] then', result);
        return '[2] then payload';
    })
    .catch((error) => {
        // This block will handle the rejection from the initial promise
        console.log('[1] catch', error); // Output: [1] catch Reject DATA!
        return '[1] catch payload'; // The promise is now resolved with this value
    })
    .catch((error) => {
        // This block won't be executed because the previous `catch` has handled the error
        console.log('[2] catch', error);
        return '[2] catch payload';
    })
    .then((result) => {
        // This block will be executed because the promise is now resolved
        console.log('[3] then', result); // Output: [3] then [1] catch payload
        return '[3] then payload';
    })
    .finally(() => {
        // `finally` is always executed
        console.log('[2] finally'); // Output: [2] finally
        return '[2] finally payload'; // Note: The return value of `finally` is ignored
    })
    .catch((error) => {
        // This block won't be executed because there is no error at this point
        console.log('[3] catch', error);
        return '[3] catch payload';
    })
    .then((result) => {
        // This block will be executed because the promise is resolved
        console.log('[4] then', result); // Output: [4] then [3] then payload
        return '[4] then payload';
    });


// Expected Output:
// [1] finally
// [1] catch Reject DATA!
// [3] then[1] catch payload
// [2] finally
// [4] then[3] then payload