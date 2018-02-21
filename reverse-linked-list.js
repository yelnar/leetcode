/**
 * https://leetcode.com/problems/reverse-linked-list
 * 
 * Reverse a singly linked list.
 * 
 * Hint:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p1 = null;
    let p2 = head;

    while (p2) {
        let next = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = next;
    }

    return p1;
};