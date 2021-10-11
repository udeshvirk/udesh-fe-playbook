const capitalizeFirst = (array) => {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    let res = [];
    const string = array.slice()[0][0].toUpperCase() + array.slice()[0].substr(1);
    res.push(string);
    res = res.concat(capitalizeFirst(array.slice(1)));
    return res;
}

console.log(capitalizeFirst(['car','taco','banana']));