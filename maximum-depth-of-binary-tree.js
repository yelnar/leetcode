/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree
 * 
 * Given a binary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * 
 * return its depth = 3.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 *  Short depth first search.
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
 /**
  * Same but longer recursive solution.
  
var maxDepth = function(root) {
    if (!root) return 0;
    let maxD = 0;

    recursive(root, 1);

    return maxD;

    function recursive(node, depth) {
        if (node.left) recursive(node.left, depth + 1);
        if (node.right) recursive(node.right, depth + 1);
        if (depth > maxD) maxD = depth;
    }
};

 */