/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.com/problems/add-two-numbers
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let cL1 = l1;
    let cL2 = l2;
    let res = new ListNode(0);
    let res_tail = res;

    while (cL1 || cL2 || carry) {
        let l1Val = (cL1) ? cL1.val : 0;
        let l2Val = (cL2) ? cL2.val : 0;
        let sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        res_tail.next = new ListNode(sum);
        res_tail = res_tail.next;
        if (cL1 !== null) {
            cL1 = cL1.next;
        }
        if (cL2 !== null) {
            cL2 = cL2.next;
        }
    }
    return res.next;
};