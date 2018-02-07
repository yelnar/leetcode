/**
 * https://leetcode.com/problems/two-sum
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // there might be negative numbers as well
        // if (nums[i] > target) continue;
        
        for (let j = 1; j < nums.length && i != j; j++) {
            // if (nums[j] > target) continue;
            
            if (nums[i] + nums[j] === target) {
                console.log(i, j);
                return [i, j];
            }            
        }
    }
};

console.log(twoSum([-3,4,3,90],0));