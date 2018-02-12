/**
 * https://leetcode.com/problems/maximum-subarray
 * 
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * 
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * @param {number[]} nums
 * @return {number}
 */

/**
 * DP solution.
 * Sub-problem: sum(0, i)

               |- a(i), if sum(0, i - 1) < 0
   sum(0, i) = |
               |- sum(0, i - 1) + a(i), if sum(0, i - 1) >= 0
 */

var maxSubArray = function(nums) {
    let sum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (sum[i - 1] < 0) sum[i] = nums[i];
        else sum[i] = sum[i - 1] + nums[i];
    }

    return sum.reduce((acc, curr) => Math.max(acc, curr), sum[0]);
}

/**
 * Simple iterative solution

var maxSubArray = function(nums) {
    let s;
    let max;

    for (let num of nums) {
        if (s == null) s = num;
        else if (s < 0 && num >= s) s = num;
        else if (s >= 0 && s + num >= 0) s += num;
        else s = null;

        if (max == null || (s != null && max < s)) max = s;
    }

    return max;
};
 
 *
 */

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([-2,-1]));
console.log(maxSubArray([-1,1,2,1]));
console.log(maxSubArray([-2,3,1,3]));