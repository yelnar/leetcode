/**
 * https://leetcode.com/problems/palindrome-linked-list
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Divide list into to parts, then reverse first one and compare with second.
    let middle = tail = head;
    let left, right;

    while (tail.next && tail.next.next) {
        middle = middle.next;
        tail = tail.next.next;
    }

    if (tail.next) {
        middle = middle.next;
        right = middle;
    } else { right = middle.next; }
    left = reverseUntil(head, middle);

    while (left && right) {
        if (left.val !== right.val) { return false; }
        left = left.next;
        right = right.next;
    }

    return true;

    function reverseUntil(from, until) {
        let p1 = null;
        let p2 = from;
        let next;
        while (p2 !== until) {
            next = p2.next;
            p2.next = p1;
            p1 = p2;
            p2 = next;
        }
        return p1;
    }
};