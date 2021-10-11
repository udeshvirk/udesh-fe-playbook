const sameFrequency = (num1, num2) => {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (const char of strNum1) {
        countNum1[char] = (countNum1[char] || 0) + 1
    }

    for (const char of strNum2) {
        countNum2[char] = (countNum2[char] || 0) + 1
    }
    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

console.log(sameFrequency(11123, 21131));
console.log(sameFrequency(11123, 211314));
console.log(sameFrequency(111233, 211314));