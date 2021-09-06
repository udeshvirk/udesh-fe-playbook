/*
implement filterMe prototype method in array, that will behave like filter
const arr = [2,4,5,7,6];
const result = arr.filter(function (item){
   return item > 4;
});
console.log(result);
*/

Array.prototype.filterMe = function (fn) {
    const myArray = this;
    const newArray = []
    if (!myArray.length) {
        return newArray;
    }
    for (let i = 0; i < myArray.length; i++) {
        if (fn(myArray[i])) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

const arr = [2, 4, 5, 7, 6];
const result = arr.filterMe(function (item) {
    return item > 4;
});
console.log(result);
