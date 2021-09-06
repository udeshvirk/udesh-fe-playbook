/*
* Implement Map polyfill using reduce method
* */

Array.prototype.mapMe = function (fn) {
    return this.reduce((acc, currentValue) => {
        return [...acc, fn(currentValue)]
    }, [])
}

const arr = [1, 2, 3, 4]
console.log(arr.mapMe((item) => item + 1))