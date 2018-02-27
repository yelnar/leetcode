/**
 * https://leetcode.com/problems/linked-list-cycle
 * 
 * Given a linked list, determine if it has a cycle in it.
 * 
 * Follow up:
 * Can you solve it without using extra space?
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
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (slow && fast.next) {
        slow = slow.next;
        
        if (fast.next.next) fast = fast.next.next;
        else return false;

        if (slow === fast) return true;
    }

    return false;
};

/**
 * Test.
 * 
 * @param {number} val 
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let arr = [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5];
let nodes = arr.map((val) => new ListNode(val));
let head = nodes[0];
for (let i = 1, node = head; i < nodes.length; i++) {
    node.next = nodes[i];
    node = node.next;
}

console.log(hasCycle(head));
