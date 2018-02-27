/**
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