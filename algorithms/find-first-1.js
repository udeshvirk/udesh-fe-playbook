/*
Find the index of first 1 in a sorted array of 0’s and 1’s
Input : arr[] = {0, 0, 0, 0, 0, 0, 1, 1, 1, 1}
Output : 6
The index of first 1 in the array is 6.

Input : arr[] = {0, 0, 0, 0}
Output : -1
1's are not present in the array.

https://www.geeksforgeeks.org/find-index-first-1-sorted-array-0s-1s/
*/

const indexOfFirstOne = (arr) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((low + high) / 2);

        // if true, then 'mid' is the index of first '1'
        if (arr[mid] == 1 && (mid == 0 || arr[mid - 1] == 0))
            return mid;

        // first '1' lies to the left of 'mid'
        else if (arr[mid] == 1)
            high = mid - 1;

        // first '1' lies to the right of 'mid'
        else
            low = mid + 1;
    }

    // 1's are not present in the array
    return -1;

}


const arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
const arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
console.log(indexOfFirstOne(arr));
console.log(indexOfFirstOne(arr2));