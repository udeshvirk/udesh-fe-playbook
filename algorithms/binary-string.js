// https://www.geeksforgeeks.org/generate-all-binary-strings-from-given-pattern/
// Generate all binary strings from given pattern


String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1);
}
const generateBinaryStrings = (str, char, index = 0) => {
    let strings = [];
    if (index === str.length) {
        strings.push(str);
        return strings;
    }
    if (str[index] === char) {
        str = str.replaceAt(index, 0);
        strings = [...generateBinaryStrings(str, char, index + 1)];
        str = str.replaceAt(index, 1);
        strings = [...strings, ...generateBinaryStrings(str, char, index + 1)];
    } else {
        strings = [...generateBinaryStrings(str, char, index + 1)];
    }
    return strings;
}
let str = "1??0?101";
console.log(generateBinaryStrings(str, '?'));