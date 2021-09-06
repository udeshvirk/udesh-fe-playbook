const input = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

// ES6
const spiralEs6 = function (matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }
    return arr;
}


// without recursion
const spiralTraversal = function (matrix) {
    let result = [];
    while(matrix.length) {
        // right
        result = result.concat(matrix.shift());

        // down
        for (let j = 0; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // bottom
        result = result.concat(matrix.pop().reverse());

        // up
        for (let k = matrix.length - 1; k > 0; k--) {
            result.push(matrix[k].shift());
        }
    };
    return result;
};


// with recursion
const spiralTraversalRecusrion = function (matriks) {
    let result = [];
    const goAround = function (matrix) {
        if (matrix.length == 0) {
            return;
        }

        // right
        result = result.concat(matrix.shift());

        // down
        for (let j = 0; j < matrix.length - 1; j++) {
            result.push(matrix[j].pop());
        }

        // bottom
        result = result.concat(matrix.pop().reverse());

        // up
        for (let k = matrix.length - 1; k > 0; k--) {
            result.push(matrix[k].shift());
        }
        return goAround(matrix);
    };

    goAround(matriks);

    return result;
};
// console.log('result1', spiralTraversal(input));
console.log('result2', spiralTraversal(input));