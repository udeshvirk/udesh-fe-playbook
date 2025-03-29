### Given an array of integers, write a function to find the maximum product of any three numbers. Describe your approach before coding.

## Step 1: Understand the Problem

Given an array of integers, we want the maximum possible product obtained by multiplying exactly **three numbers** from the array.

There are two key cases we must consider:

- **Case 1:** The product of the three largest positive numbers (e.g., `[3, 5, 7]`)
- **Case 2:** The product of the two smallest (negative) numbers and the largest positive number (e.g., `[-10, -9, 8]`)

---

## Step 2: Determine the Strategy

A **sorting-based strategy** is intuitive and straightforward:

- **Sort the array.**
- Calculate two possible candidates for maximum product:

  - Product of **last three numbers** (three largest numbers).
  - Product of **first two numbers** (two smallest numbers, possibly negative) and the **last number** (largest positive number).

- The maximum product will be the larger of these two candidates.

**Complexity:**

- Sorting takes **O(n log n)** time, which is acceptable for most scenarios.
- If performance is critical, a more optimized approach (**O(n)**) can be used, keeping track of the top three largest and two smallest numbers without sorting.

---

## Step 3: Implement the Solution (in JavaScript/TypeScript)

Here’s a robust, straightforward implementation:

```
function maximumProduct(nums: number[]): number {
// Sort the array in ascending order
nums.sort((a, b) => a - b);

const n = nums.length;

// Product of the three largest numbers
const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

// Product of two smallest numbers and the largest number
const product2 = nums[0] * nums[1] * nums[n - 1];

// Return the maximum of these two products
return Math.max(product1, product2);
}

// Example usage:
console.log(maximumProduct([-10, -10, 5, 2])); // Output: 500
console.log(maximumProduct([1, 2, 3, 4]));     // Output: 24
```

## Explanation:

- **Sorting** ensures that negative numbers are at the beginning and positive/largest numbers at the end.
- You compare two products:

  - The largest three positive numbers.
  - The two smallest (possibly negative) numbers multiplied by the largest positive number.

This covers all scenarios that could yield the highest possible product, ensuring accuracy.

---

## Optional Optimization (Linear Time):

To further optimize this problem and achieve **O(n)** complexity, you could track:

- **Three largest numbers:** `max1`, `max2`, `max3`
- **Two smallest numbers:** `min1`, `min2`

Traverse the array once, updating these numbers, then calculate the maximum product accordingly.

If you prefer this optimized solution, let me know, and I can demonstrate it for you!
