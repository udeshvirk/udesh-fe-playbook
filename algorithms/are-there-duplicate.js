const areThereDuplicates = (...args) => {
    let collection = {}
    for (const val of args) {
        if (collection[val]) {
            return true;
        }
        collection[val] = 1;
    }
    return false;
}

const areThereDuplicates2 = (...args) => {
    return new Set(args).size !== args.length;
}
console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 2, 3, 3, 4));
console.log(areThereDuplicates('a', 'b', 'c'));
console.log(areThereDuplicates('a', 'b', 'a', 'c'));