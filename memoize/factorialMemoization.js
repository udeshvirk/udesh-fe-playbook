function factorial(n) {
    const cache = {};
    return innerFact = (n) => {
        if (!cache[n]) {
            cache[n] = (n === 1) ? n : n * innerFact(n - 1)
        }
        console.log('cache', cache);
        return cache[n]
    }

}
const factorialMe = factorial(3);
console.log(factorialMe(3));
console.log(factorialMe(5))