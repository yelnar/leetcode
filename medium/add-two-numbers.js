/**
 * https://leetcode.com/problems/add-two-numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l = new ListNode(null);
    let pointer = l;
    let increment = 0;
    
    while (l1 && l2) {
        if (l.val != null) {
            l = l.next = new ListNode(null);
        }
        [l.val, increment] = valAndInc(increment, l1, l2);
        l1 = l1.next;
        l2 = l2.next;
    }
    
    let rest = l1 ? l1 : l2;
    while (rest) {
        l = l.next = new ListNode(null);
        [l.val, increment] = valAndInc(increment, rest);
        rest = rest.next;
    }

    if (increment) {
        l.next = new ListNode(null);
        l.next.val = increment;
    }

    return pointer;

    function valAndInc(inc, ...nodes) {
        let sum = inc + nodes.reduce((acc, curr) => {
            return acc + curr.val;
        }, 0);
        return [sum % 10, Math.floor(sum / 10)];
    }
};