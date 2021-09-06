//Write a function called productOfArray which takes in an array of numbers and
//returns the product of them all
//productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    } else {
        return arr.pop() * productOfArray(arr);
    }
}
console.log(productOfArray([1, 2, 3, 10]));
console.log(productOfArray([]));
console.log(productOfArray([5, 6]));