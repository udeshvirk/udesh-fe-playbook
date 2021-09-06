// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5].
// If the times argument is negative, return an empty array.

/*function replicate(times, num){
    function recurse(index, res){
        res.push(num);
        if(index === times-1){
            return res;
        } else {
            return recurse(index+1, res)
        }
    }
    return recurse(0, [])
}
console.log(replicate(3, 5));*/

function replicate(times, num) {
    if (times <= 0) {
        return [];
    } else {
        return [num].concat(replicate(times - 1, num))
    }
}
console.log(replicate(0, 5));