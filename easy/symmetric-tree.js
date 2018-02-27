/**
 * https://leetcode.com/problems/symmetric-tree
 * 
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Root element might be null
    return equalNode(root, root);
    
    function equalNode(n1, n2) {
        if (!n1 && !n2) return true;
        if ((!n1 && n2) || (n1 && !n2)) return false;
        if (n1.val !== n2.val) return false;
        return equalNode(n1.left, n2.right) && equalNode(n1.right, n2.left);
    }
};