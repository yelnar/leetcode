/**
 * https://leetcode.com/problems/merge-two-sorted-lists
 * 
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4

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
var mergeTwoLists = function(l1, l2) {
    // Fast exit
    if (!l1) return l2;
    if (!l2) return l1;

    let l;

    // The idea is to set l as a list with lowest first value
    // and then merge l2 into l
    if (l1.val < l2.val) l = l1;
    else {
        l = l2;
        while (l2.next && l2.next.val <= l1.val) {
            l2 = l2.next;
        }
        let n = l2.next;
        l2.next = l1;
        l2 = n;
    }

    while (l1.next && l2) {
        if (l1.next.val > l2.val) {
            let n = l1.next;
            let m = l2.next;
            l1.next = l2;
            l2.next = n;
            l2 = m;
        }
        l1 = l1.next;
    }

    if (l2) {
        l1.next = l2;
    }

    return l;
};