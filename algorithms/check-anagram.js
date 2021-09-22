const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = {};
    for (const char of str1) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    for (const char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'yrtweq'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));