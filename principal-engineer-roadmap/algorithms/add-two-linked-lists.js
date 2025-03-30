/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 * 
 * Problem: Add two numbers represented as linked lists.
 * Link: https://leetcode.com/problems/add-two-numbers
 */

/**
 * Adds two numbers represented by linked lists and returns the sum as a linked list.
 * @param {ListNode} l1 - The first linked list.
 * @param {ListNode} l2 - The second linked list.
 * @return {ListNode} - The resulting linked list representing the sum.
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0; // Initialize carry to handle sums greater than 9
    let cL1 = l1; // Pointer for the first linked list
    let cL2 = l2; // Pointer for the second linked list
    let res = new ListNode(0); // Dummy node to simplify result list creation
    let res_tail = res; // Pointer to the tail of the result list

    // Loop until both lists are exhausted and there is no carry
    while (cL1 || cL2 || carry) {
        // Get the current values from the lists or 0 if the list is exhausted
        let l1Val = (cL1) ? cL1.val : 0;
        let l2Val = (cL2) ? cL2.val : 0;

        // Calculate the sum of the current digits and the carry
        let sum = l1Val + l2Val + carry;

        // Update carry for the next iteration
        carry = Math.floor(sum / 10);

        // Get the digit to store in the current node
        sum = sum % 10;

        // Create a new node with the sum and attach it to the result list
        res_tail.next = new ListNode(sum);
        res_tail = res_tail.next;

        // Move to the next nodes in the input lists if they exist
        if (cL1 !== null) {
            cL1 = cL1.next;
        }
        if (cL2 !== null) {
            cL2 = cL2.next;
        }
    }

    // Return the result list, skipping the dummy node
    return res.next;
};

// Example usage:
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// Example input
let l1 = createLinkedList([2, 4, 3]); // Represents the number 342
let l2 = createLinkedList([5, 6, 4]); // Represents the number 465

// Add the two numbers
let result = addTwoNumbers(l1, l2);

// Print the result
printLinkedList(result); // Output: 7 -> 0 -> 8 (Represents the number 807)