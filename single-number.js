/**
 * https://leetcode.com/problems/single-number
 * 
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} nums
 * @return {number}
 */
/**
 * a^a === 0, where ^ is XOR
 */
var singleNumber = function(nums) {
    let single = 0;
    for (num of nums) {
        single ^= num;
    }
    return single;
};

console.log(singleNumber([2,4,3,2,3]))