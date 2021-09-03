function factorial(n) {
    return (n === 1) ? n : n * factorial(n - 1);
}

function memoize(fn) {
    const cache = {}
    return (n) => {
        if (n in cache) {
            console.log('cache', cache);
            return cache[n]
        } else {
            cache[n] = fn(n);
            return cache[n]
        }
    }
}
const factorialMe = memoize(factorial);
console.log(factorialMe(3));
console.log(factorialMe(3));