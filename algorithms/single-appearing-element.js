//Find the element that appears once in an array where every other element appears twice
//https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/
// function which find number
const singleNumber = (nums) => {
    let m = new Map();
    let sum1 = 0, sum2 = 0;
    nums.forEach((num) => {
        if (!m.has(num)) {
            sum1 += num;
            m.set(num, 1);
        }
        sum2 += num;
    })

    // applying the formula.
    return (2 * (sum1) - sum2);
}

const arr = [2, 3, 5, 4, 5, 3, 4];
console.log(singleNumber(arr)) //2