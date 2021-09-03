function removeDuplicateString(str) {
    return Array.from(new Set(str.split(" "))).join(" ");
}

console.log(removeDuplicateString("This is test test string"));