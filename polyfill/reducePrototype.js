/* implement reduceMe prototype method in array, that will behave like reduce
const result = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
},0);
console.log(result)*/

Array.prototype.reduceMe = function (fn, initial) {
    let acc = initial || this[0]
    for (let i = 0; i < this.length; i++) {
        acc = fn(acc, this[i])
    }
    return acc
}

const result = [0, 1, 2, 3, 4].reduceMe(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);
console.log(result)