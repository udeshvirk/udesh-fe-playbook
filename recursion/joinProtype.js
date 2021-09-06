/*const arr = ['A', 'B', 'C', 'D']
console.log(arr.join('=>'));*/

Array.prototype.joinMe = function (joiner) {
    const arr = this;
    function join(index, str) {
        str += arr[index];
        if (index === arr.length - 1) {
            return str;
        } else {
            return join(index + 1, str + joiner);
        }
    }
    return join(0, '')
}

const arr = ['A', 'B', 'C', 'D']
console.log(arr.joinMe('=>'));