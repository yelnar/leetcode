/**
 * https://leetcode.com/problems/climbing-stairs
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * 
 * Example 1:
 * 
 * Input: 2
 * Output:  2
 * Explanation:  There are two ways to climb to the top.
 * 
 * 1. 1 step + 1 step
 * 2. 2 steps
 * Example 2:
 * 
 * Input: 3
 * Output:  3
 * Explanation:  There are three ways to climb to the top.
 * 
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /**
     * Let's suppose that it takes m steps to climb n-2 steps
     * and k steps to climb n-1 steps.
     * Then to climb n steps we need climb k+m steps; from m we can jump only 2 steps at once,
     * and from k we can jump only 1 step at once to reach n steps.
     */

    let m, k;

    for (m = 0, k = 1; n > 1; n--) {
        let s = m + k;
        m = k;
        k = s;
    }

    return m + k;

};

console.log(climbStairs(7));