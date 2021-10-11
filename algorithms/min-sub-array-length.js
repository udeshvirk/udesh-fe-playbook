/*
Function should return the minimal length of contiguous sub array of which the sum is greater than or equal to give number. 
Return 0 if not found
*/
const minSubArrayLen = (nums, sum) => {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;
    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop  
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;

};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))//2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))//2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))//1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))//3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))//5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))//2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))//0