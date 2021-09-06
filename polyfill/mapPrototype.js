/* implement mapMe prototype method in array, that will behave like map
var arr= [1,2,3];
var result = arr.map(function(item){
     console.log(item);
    return item*2
});
console.log(result)
 */
Array.prototype.mapMe = function (fn) {
    const myArray = this;
    const newArray = []
    if (!myArray.length) {
        return newArray;
    }
    for (let i = 0; i < myArray.length; i++) {
        const item = fn(myArray[i]);
        newArray.push(item);
    }
    return newArray
}

const arr1 = [1, 2, 3];
const result = arr1.mapMe(function (item) {
    console.log(item);
})
console.log('result', result)

const result1 = arr1.mapMe(function (item) {
    return item * 2;
})
console.log('result1', result1)